import { useState, useCallback, useEffect, useRef, cloneElement } from 'react';

export default function ScrollContext({ children }) {
  const [dragStart, setDragStart] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const container = useRef(null);

  const scrollStart = useCallback(
    (e) => {
      setDragStart(true);
      if (container.current) {
        setStartX(e.pageX - container.current.offsetLeft);
        setScrollLeft(container.current.scrollLeft);
      }
    },
    [container]
  );
  const scrollStop = useCallback((e) => setDragStart(false), []);

  const scrollPage = useCallback(
    (e) => {
      e.preventDefault();
      if (!dragStart || !container.current) return null;
      const x = e.pageX - container.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.current.scrollLeft = scrollLeft - walk;
      return 0;
    },
    [scrollLeft, dragStart, startX, container]
  );

  useEffect(() => {
    window.addEventListener('mousedown', scrollStart);
    window.addEventListener('mouseleave', scrollStop);
    window.addEventListener('mouseup', scrollStop);
    window.addEventListener('mousemove', scrollPage);
    return () => {
      window.removeEventListener('mousedown', scrollStart);
      window.removeEventListener('mouseleave', scrollStop);
      window.removeEventListener('mouseup', scrollStop);
      window.removeEventListener('mousemove', scrollPage);
    };
  }, [scrollStart, scrollStop, scrollPage]);

  return cloneElement(children, { scrollStop, container });
}
