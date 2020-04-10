import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';

import {
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

  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const removeHandler = () => dispatch('boards/removeFavourite', id);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <ItemLink
          to="/nerub/asdsad"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <ItemBackground image={content.img} />
          <SmallImage image={content.img} />
          <BoardTitle>
            <Title>{content.title}</Title>
            <TeamTitle>{content.title}</TeamTitle>
          </BoardTitle>
          <IconContainer favourite onClick={preventDefault}>
            <IconButton onClick={removeHandler}>
              <Icon name="star outline" />
            </IconButton>
          </IconContainer>
        </ItemLink>
      )}
    </Draggable>
  );
}
