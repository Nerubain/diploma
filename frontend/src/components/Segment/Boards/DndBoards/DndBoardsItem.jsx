import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';

import {
  ItemContainer,
  ItemLink,
  ItemBackground,
  SmallImage,
  BoardTitle,
  Title,
  IconContainer,
  IconButton,
} from '../../style';

export default function BoardsItem({ content, id, index }) {
  const stop = (e) => e.stopPropagation();

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <ItemContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <ItemLink to="/nerub/board">
            <ItemBackground image={content.img} />
            <SmallImage image={content.img} />
            <BoardTitle>
              <Title>{content.title}</Title>
            </BoardTitle>
            <IconContainer favourite>
              <IconButton onClick={stop}>
                <Icon name="star outline" />
              </IconButton>
            </IconContainer>
          </ItemLink>
        </ItemContainer>
      )}
    </Draggable>
  );
}
