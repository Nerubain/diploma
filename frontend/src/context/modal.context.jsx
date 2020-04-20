import React, { createContext, useState, useCallback } from 'react';

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ name: '', team: '' });

  const selectModal = useCallback((name, team) => setModal({ name, team }), []);
  const closeModal = useCallback(() => setModal({ name: '', team: '' }), []);

  return (
    <ModalContext.Provider value={{ modal, selectModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
