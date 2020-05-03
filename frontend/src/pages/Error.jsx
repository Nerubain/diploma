import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Error() {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) void 0;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>Error</h1>
    </DragDropContext>
  );
}
