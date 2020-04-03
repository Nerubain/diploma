import React, { createContext, useState, useCallback, useEffect, useRef } from 'react';

export const SegmentContext = createContext({});

export const SegmentProvider = ({ children }) => {
  const [segment, setSegment] = useState('');
  const ref = useRef(null);

  const blur = () => setSegment('');
  const showSegment = (name) => (segment === name ? setSegment('') : setSegment(name));
  const stopPropagation = (e) => e.stopPropagation();

  const escapeListener = useCallback((e) => {
    if (e.key === 'Escape') blur();
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('keyup', escapeListener);
    };
  }, [escapeListener]);

  return (
    <SegmentContext.Provider value={{ ref, showSegment, blur, stopPropagation, segment }}>
      {children}
    </SegmentContext.Provider>
  );
};
