import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Layout from '@components/Layout';

export default function Error() {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) void 0;
  };

  return (
    <Layout>
      <DragDropContext onDragEnd={onDragEnd}>
        <h1>Error</h1>
      </DragDropContext>
    </Layout>
  );
}
