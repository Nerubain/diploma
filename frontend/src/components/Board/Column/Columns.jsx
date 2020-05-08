import React from 'react';

import initialData from '../InitialData';
import Column from './Column';

export default function Columns({ columns, order, tasks, newTask, updateColumn }) {
  return (
    <>
      {order.map((columnId, index) => {
        const column = columns.find((col) => col._id === columnId);
        const tasksList = column.tasks.map((id) => tasks.find((task) => task._id === id));
        return (
          <Column
            column={column}
            tasks={tasksList}
            key={column._id}
            index={index}
            newTask={newTask}
            updateColumn={updateColumn}
          />
        );
      })}
    </>
  );
}
