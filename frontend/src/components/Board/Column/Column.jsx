/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import FocusWrapper from '../FocusWrapper';
import ColumnHead from './ColumnHeader';
import Task from '../Task/Task';
import { ColumnWrapper, ColumnContent, TasksList } from './style';

export default function Column({ column, tasks, index }) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(draggbleProvided) => (
        <ColumnWrapper>
          <Droppable droppableId={column.id} type="task">
            {(provided) => (
              <ColumnContent ref={draggbleProvided.innerRef} {...draggbleProvided.draggableProps}>
                <FocusWrapper>
                  <ColumnHead
                    title={column.label}
                    handler={{ ...draggbleProvided.dragHandleProps }}
                  />
                </FocusWrapper>
                <TasksList ref={provided.innerRef} {...provided.droppableProps}>
                  {tasks.map((task, indx) => (
                    <Task task={task} key={task.id} index={indx} />
                  ))}
                  {provided.placeholder}
                </TasksList>
              </ColumnContent>
            )}
          </Droppable>
        </ColumnWrapper>
      )}
    </Draggable>
  );
}
