import React, { createContext, useState, useCallback, useEffect, useRef } from 'react';

export const SegmentContext = createContext({});

export const SegmentProvider = ({ children }) => {
  const [segment, setSegment] = useState({ type: null, ref: null });
  const boardsRef = useRef(null);
  const addRef = useRef(null);
  const userMenuRef = useRef(null);

  const close = () => setSegment({ type: null, ref: null });
  const show = (name, ref) =>
    setSegment((pSt) => (pSt.type === name ? { type: null, ref: null } : { type: name, ref }));

  const closeOutSide = useCallback(
    (e) => {
      if (!e.target.slot && segment.ref && !segment.ref.current.contains(e.target)) {
        close();
      }
    },
    [segment]
  );

  const escapeListener = useCallback((e) => {
    if (e.key === 'Escape') close();
  }, []);

  useEffect(() => {
    document.addEventListener('click', closeOutSide);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', closeOutSide);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [escapeListener, closeOutSide]);

  return (
    <SegmentContext.Provider value={{ segment, boardsRef, addRef, userMenuRef, show, close }}>
      {children}
    </SegmentContext.Provider>
  );
};
