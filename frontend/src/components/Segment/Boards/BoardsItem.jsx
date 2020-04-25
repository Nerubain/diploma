import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';

import {
  ItemLink,
  ItemBackground,
  SmallImage,
  BoardTitle,
  Title,
  TeamTitle,
  IconContainer,
  IconButton,
} from '../style';

export default function BoardsItem({ content, id, favourite, forwardRef, opacity, wrapped }) {
  const { dispatch } = useStoreon();
  const { image, color, name, category } = content;

  const disebleAction = (e) => e.preventDefault();
  const addHandler = () => dispatch('boards/toFavourite', id);
  const removeHandler = () => dispatch('boards/removeFavourite', id);
  const actionHandler = () => (favourite ? removeHandler() : addHandler());

  return (
    <ItemLink
      to="/nerub/asdsada"
      ref={forwardRef}
      style={{ opacity }}
      onDragStart={!wrapped ? disebleAction : null}
    >
      <ItemBackground image={image} color={color} />
      <SmallImage image={image} />
      <BoardTitle>
        <Title>{name}</Title>
        {wrapped && <TeamTitle>{category}</TeamTitle>}
      </BoardTitle>
      <IconContainer favourite={favourite} onClick={disebleAction}>
        <IconButton onClick={actionHandler}>
          <Icon name="star outline" />
        </IconButton>
      </IconContainer>
    </ItemLink>
  );
}
