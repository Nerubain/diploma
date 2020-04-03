import React, { createContext, useState } from 'react';

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [right, setRight] = useState(false);

  const sidebarHandler = () => setRight(!right);

  return (
    <SidebarContext.Provider value={{ right, sidebarHandler }}>{children}</SidebarContext.Provider>
  );
};
