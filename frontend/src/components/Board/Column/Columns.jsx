import React from 'react';

import initialData from '../InitialData';
import Column from './Column';

export default function Columns() {
  return (
    <>
      {initialData.columnsOrder.map((columnId, index) => {
        const column = initialData.columns.find((col) => col.id === columnId);
        const tasks = column.taskIds.map((id) => initialData.tasks.find((task) => task.id === id));
        return <Column column={column} tasks={tasks} key={column.id} index={index} />;
      })}
    </>
  );
}
