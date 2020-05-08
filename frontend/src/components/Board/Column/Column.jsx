/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import FocusWrapper from '../FocusWrapper';
import ColumnHead from './ColumnHeader';
import Tasks from '../Task/Tasks';
import Bottom from './ColumnBottom';
import { ColumnWrapper, ColumnContent, TasksList } from './style';

export default function Column({ column, tasks, index, newTask, updateColumn }) {
  return (
    <Draggable draggableId={column._id} index={index}>
      {(draggbleProvided) => (
        <ColumnWrapper>
          <Droppable droppableId={column._id} type="task">
            {(provided) => (
              <ColumnContent ref={draggbleProvided.innerRef} {...draggbleProvided.draggableProps}>
                <FocusWrapper>
                  <ColumnHead
                    title={column.title}
                    handler={{ ...draggbleProvided.dragHandleProps }}
                    updateColumn={updateColumn}
                    column={column._id}
                  />
                </FocusWrapper>
                <FocusWrapper>
                  <TasksList ref={provided.innerRef} {...provided.droppableProps}>
                    <Tasks tasks={tasks} />
                    {provided.placeholder}
                  </TasksList>
                  <Bottom newTask={newTask} column={column._id} />
                </FocusWrapper>
              </ColumnContent>
            )}
          </Droppable>
        </ColumnWrapper>
      )}
    </Draggable>
  );
}
