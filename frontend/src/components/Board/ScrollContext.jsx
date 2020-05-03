import { useState, useCallback, useEffect, cloneElement } from 'react';

export default function ScrollContext({ children }) {
  const [dragStart, setDragStart] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const container = document.getElementById('container');

  const scrollStart = useCallback(
    (e) => {
      setDragStart(true);
      if (container) {
        setStartX(e.pageX - container.offsetLeft);
        setScrollLeft(container.scrollLeft);
      }
    },
    [container]
  );
  const scrollStop = useCallback((e) => setDragStart(false), []);

  const scrollPage = useCallback(
    (e) => {
      e.preventDefault();
      if (!dragStart) return null;
      const x = e.pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
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

  return cloneElement(children, { scrollStop });
}
