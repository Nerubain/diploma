/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Columns from './Column/Columns';
import AddColumnButton from './AddColumnButton';
import FocusWrapper from './FocusWrapper';
import { BoardContent } from './style';

export default function BoardContainer({ scrollStop, container }) {
  const setRefs = useCallback(
    (element, provider) => {
      provider.innerRef(element);
      container.current = element;
    },
    [container]
  );

  return (
    <DragDropContext onDragStart={scrollStop} onDragEnd={() => console.log('ad')}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div style={{ position: 'relative', flexGrow: 1 }}>
            <BoardContent {...provided.droppableProps} ref={(el) => setRefs(el, provided)}>
              <Columns />
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
