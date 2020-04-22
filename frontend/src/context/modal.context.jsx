import React, { createContext, useState, useCallback } from 'react';

export const ModalContext = createContext({});

const initialState = { name: '', team: '', param: '' };

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(initialState);

  const selectModal = useCallback(
    (name = '', team = '', param = '') => setModal({ name, team, param }),
    []
  );
  const closeModal = useCallback(() => setModal(initialState), []);

  return (
    <ModalContext.Provider value={{ modal, selectModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
