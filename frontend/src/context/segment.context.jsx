import React, { createContext, useState, useCallback, useEffect, useRef } from 'react';

export const SegmentContext = createContext({});

export const SegmentProvider = ({ children }) => {
  const [segment, setSegment] = useState({ type: null, ref: null });
  const [search, setSearch] = useState('');
  const boardsRef = useRef(null);
  const addRef = useRef(null);
  const userMenuRef = useRef(null);

  const close = useCallback(() => {
    setSearch('');
    return setSegment({ type: null, ref: null });
  }, []);

  const searchHandler = (e, { value }) => setSearch(value);

  const show = (name, ref) =>
    setSegment((prevSt) => (prevSt.ref === ref ? { type: null, ref: null } : { type: name, ref }));

  const closeOutSide = useCallback(
    (e) =>
      !e.target.slot && segment.ref && !segment.ref.current.contains(e.target) ? close() : null,
    [segment, close]
  );

  const escapeListener = useCallback(
    (e) => {
      if (e.key === 'Escape') close();
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener('click', closeOutSide);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', closeOutSide);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [escapeListener, closeOutSide]);

  return (
    <SegmentContext.Provider
      value={{ segment, boardsRef, addRef, userMenuRef, show, close, searchHandler, search }}
    >
      {children}
    </SegmentContext.Provider>
  );
};
