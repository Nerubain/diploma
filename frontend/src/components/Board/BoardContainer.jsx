/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import initialData from './InitialData';
import Column from './Column/Column';
import AddColumnButton from './AddColumnButton';
import FocusWrapper from './FocusWrapper';
import { BoardContent } from './style';

export default function BoardContainer() {
  const [dragStart, setDragStart] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const container = useRef();

  const scrollStart = useCallback((e) => {
    setDragStart(true);
    setStartX(e.pageX - container.current.offsetLeft);
    setScrollLeft(container.current.scrollLeft);
  }, []);

  const scrollStop = useCallback((e) => setDragStart(false), []);

  const scrollPage = useCallback(
    (e) => {
      if (!dragStart) return null;
      e.preventDefault();
      const x = e.pageX - container.current.offsetLeft;
      const walk = x - startX;
      container.current.scrollLeft = scrollLeft - walk;
    },
    [scrollLeft, dragStart, startX]
  );

  useEffect(() => {
    window.addEventListener('mousedown', scrollStart);
    window.addEventListener('mouseleave', scrollStop);
    window.addEventListener('mouseup', scrollStop);
    window.addEventListener('mousemove', scrollPage);
    return () => {
      window.removeEventListener('mousedown', scrollStart);
      window.removeEventListener('mouseleave', scrollStop);
      window.removeEventListener('mouseup', scrollStop);
      window.removeEventListener('mousemove', scrollPage);
    };
  }, [scrollStart, scrollStop, scrollPage]);

  return (
    <DragDropContext onDragEnd={() => console.log('ad')}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div style={{ position: 'relative', flexGrow: 1 }} ref={container}>
            <BoardContent {...provided.droppableProps} ref={provided.innerRef}>
              {initialData.columnsOrder.map((columnId, index) => {
                const column = initialData.columns.find((col) => col.id === columnId);
                const tasks = column.taskIds.map((id) =>
                  initialData.tasks.find((task) => task.id === id)
                );
                return <Column column={column} tasks={tasks} key={column.id} index={index} />;
              })}
              <FocusWrapper>
                <AddColumnButton />
              </FocusWrapper>
            </BoardContent>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
