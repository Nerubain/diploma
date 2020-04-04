import React, { useState } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { ListContainer, ListLabelWrapper, ListLabelText, ListWrapper } from '../../style';
import BoardsItem from './DndBoardsItem';

export default function BoardsList({ column, boards, onDragEnd }) {
  const [show, setShow] = useState(true);

  const showHandler = () => setShow(!show);

  const display = !!column.boardIds.length;

  const statusIcon = show ? 'minus' : 'plus';

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListContainer>
        <ListLabelWrapper>
          <Icon name={column.icon} size="small" />
          <ListLabelText>{column.label}</ListLabelText>
          <Button icon={statusIcon} size="tiny" onClick={showHandler} />
        </ListLabelWrapper>
        <Droppable droppableId={column.id}>
          {(provided) => (
            <ListWrapper
              show={display && show}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {boards.map((board, index) => (
                <BoardsItem key={board.id} content={board.content} id={board.id} index={index} />
              ))}
              {provided.placeholder}
            </ListWrapper>
          )}
        </Droppable>
      </ListContainer>
    </DragDropContext>
  );
}
