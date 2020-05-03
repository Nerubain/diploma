/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { TaskWrapper, TaskContainer, TaskTitle } from './style';

export default function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <TaskWrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <TaskContainer>
            <TaskTitle>{task.label}</TaskTitle>
          </TaskContainer>
        </TaskWrapper>
      )}
    </Draggable>
  );
}
