import React, { createContext, useState, useCallback } from 'react';

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState('');

  const selectModal = useCallback((name) => setModal(name), []);
  const closeModal = useCallback(() => setModal(), []);

  return (
    <ModalContext.Provider value={{ modal, selectModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
