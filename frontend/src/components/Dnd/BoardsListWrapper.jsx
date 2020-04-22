import React, { cloneElement } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

export default function BoardsListWrapper({ children }) {
  return <DndProvider backend={Backend}>{cloneElement(children, {}, null)}</DndProvider>;
}
