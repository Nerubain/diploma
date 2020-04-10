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
} from '../../style';

export default function BoardsItem({ content, board, favourite }) {
  const { dispatch } = useStoreon('boards');
  const disebleDrag = (e) => e.preventDefault();

  const addHandler = () => dispatch('boards/toFavourite', board);
  const removeHandler = () => dispatch('boards/removeFavourite', board);
  const preventDefault = (e) => e.preventDefault();
  const actionHandler = () => (favourite ? removeHandler() : addHandler());

  return (
    <ItemLink to="/nerub/asdsada" onDragStart={disebleDrag}>
      <ItemBackground image={content.img} />
      <SmallImage image={content.img} />
      <BoardTitle>
        <Title>{content.title}</Title>
      </BoardTitle>
      <IconContainer favourite={favourite} onClick={preventDefault}>
        <IconButton onClick={actionHandler}>
          <Icon name="star outline" />
        </IconButton>
      </IconContainer>
    </ItemLink>
  );
}
