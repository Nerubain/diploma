import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Layout from '../components/Layout';

// const list = [
//   {
//     id: 1,
//     value: 'asdkjas;d',
//   },
//   {
//     id: 2,
//     value: 'sadsad;d',
//   },
//   {
//     id: 3,
//     value: 'sadsad;d',
//   },
// ];

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
