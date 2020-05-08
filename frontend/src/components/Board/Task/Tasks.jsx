import React from 'react';

import Task from './Task';

export default function Tasks({ tasks }) {
  return <>{tasks.map((task, indx) => task && <Task task={task} key={task._id} index={indx} />)}</>;
}
