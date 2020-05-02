import React, { useRef, useState, useCallback, useEffect, cloneElement } from 'react';

export default function FocusWrapper({ children, selectText }) {
  const [select, setSelected] = useState(false);
  const input = useRef();
  const container = useRef();

  const selectOnChange = () => setSelected(!select);
  const close = useCallback((callback = () => {}) => {
    setSelected(false);
    callback();
  }, []);

  const onKeyDown = (e) => {
    if (e.keyCode === 27 || e.keyCode === 13) close();
  };

  const clickOutSide = useCallback(
    (e) => {
      if (container.current && !container.current.contains(e.target)) close();
    },
    [close]
  );

  useEffect(() => {
    if (container.current) window.addEventListener('mousedown', clickOutSide);
    if (input.current && select) {
      input.current.select();
      input.current.focus();
    }
    return () => {
      window.removeEventListener('mousedown', clickOutSide);
    };
  }, [clickOutSide, selectText, select]);

  return (
    <>
      {cloneElement(children, {
        inputRef: input,
        containerRef: container,
        selectOnChange,
        onKeyDown,
        select,
      })}
    </>
  );
}
