import React, { createContext, useState, useCallback, useRef } from 'react';

import useImageSearch from '../hooks/useImageSearch';

export const BackgroundsContext = createContext({});

export const BackgroundsProvider = ({ children }) => {
  const [page, setPage] = useState(5);
  const { images, loading, hasMore } = useImageSearch(page);
  const initialImage = images.length && images[0].replaced;
  const observer = useRef(null);

  const imageRef = useCallback(
    (node) => {
      if (loading) return null;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <BackgroundsContext.Provider value={{ images, initialImage, imageRef, loading }}>
      {children}
    </BackgroundsContext.Provider>
  );
};
