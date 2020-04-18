import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';

import {
  ItemLink,
  ItemBackground,
  SmallImage,
  BoardTitle,
  Title,
  IconContainer,
  IconButton,
} from '../style';

export default function BoardsItem({ content, board, favourite, forwardRef, opacity, dragStatus }) {
  const { dispatch } = useStoreon();
  const disebleDrag = (e) => e.preventDefault();

  const addHandler = () => dispatch('boards/toFavourite', board);
  const removeHandler = () => dispatch('boards/removeFavourite', board);
  const preventDefault = (e) => e.preventDefault();
  const actionHandler = () => (favourite ? removeHandler() : addHandler());

  return (
    <ItemLink
      to="/nerub/asdsada"
      ref={forwardRef}
      style={{ opacity }}
      onDragStart={!dragStatus ? disebleDrag : null}
    >
      <ItemBackground image={content.image} color={content.color} />
      <SmallImage image={content.image} />
      <BoardTitle>
        <Title>{content.name}</Title>
      </BoardTitle>
      <IconContainer favourite={favourite} onClick={preventDefault}>
        <IconButton onClick={actionHandler}>
          <Icon name="star outline" />
        </IconButton>
      </IconContainer>
    </ItemLink>
  );
}
