import React, { useState } from 'react';
import { useStoreon } from 'storeon/react';
import { Icon, Button } from 'semantic-ui-react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { ListContainer, ListLabelWrapper, ListLabelText, ListWrapper } from '../../style';
import EmptyList from './EmptyList';
import BoardsItem from './DndBoardsItem';

export default function BoardsList({ column, list }) {
  const [show, setShow] = useState(true);
  const { dispatch } = useStoreon('boards');

  const display = !!column.boardIds.length;
  const statusIcon = show ? 'minus' : 'plus';

  const dragHandler = (result) => dispatch('boards/drag', result);
  const showHandler = () => setShow(!show);

  return (
    <DragDropContext onDragEnd={dragHandler}>
      <ListContainer>
        <ListLabelWrapper>
          <Icon name={column.icon} size="small" />
          <ListLabelText>{column.label}</ListLabelText>
          <Button icon={statusIcon} size="tiny" onClick={showHandler} />
        </ListLabelWrapper>
        <Droppable droppableId={column.id}>
          {(provided) => (
            <ListWrapper show={show} {...provided.droppableProps} ref={provided.innerRef}>
              {display ? (
                list.map((board, index) => (
                  <BoardsItem key={board.id} content={board.content} id={board.id} index={index} />
                ))
              ) : (
                <EmptyList />
              )}
              {provided.placeholder}
            </ListWrapper>
          )}
        </Droppable>
      </ListContainer>
    </DragDropContext>
  );
}
