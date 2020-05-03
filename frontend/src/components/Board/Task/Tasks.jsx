import React from 'react';

import Task from './Task';

export default function Tasks({ tasks }) {
  return (
    <>
      {tasks.map((task, indx) => (
        <Task task={task} key={task.id} index={indx} />
      ))}
    </>
  );
}
