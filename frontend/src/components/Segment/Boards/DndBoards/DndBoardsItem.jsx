import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';

import {
  ItemContainer,
  ItemLink,
  ItemBackground,
  SmallImage,
  BoardTitle,
  Title,
  TeamTitle,
  IconContainer,
  IconButton,
} from '../../style';

export default function BoardsItem({ content, id, index }) {
  const { dispatch } = useStoreon('boards');

  const removeHandler = () => dispatch('boards/removeFavourite', id);

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
              <TeamTitle>{content.title}</TeamTitle>
            </BoardTitle>
            <IconContainer favourite>
              <IconButton onClick={removeHandler}>
                <Icon name="star outline" />
              </IconButton>
            </IconContainer>
          </ItemLink>
        </ItemContainer>
      )}
    </Draggable>
  );
}
