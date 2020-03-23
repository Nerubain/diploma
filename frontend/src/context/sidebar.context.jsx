import React, { createContext, useState } from 'react';

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <SidebarContext.Provider value={{ visible, setVisible }}>{children}</SidebarContext.Provider>
  );
};
