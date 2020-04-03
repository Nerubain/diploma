import React from 'react';
import { Icon } from 'semantic-ui-react';

import {
  ItemContainer,
  ItemLink,
  ItemBackground,
  SmallImage,
  BoardTitle,
  Title,
  IconContainer,
  IconButton,
} from '../style';

export default function BoardsItem({ image, title, favourite }) {
  const stop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <ItemContainer>
      <ItemLink to="/nerub/board">
        <ItemBackground image={image} />
        <SmallImage image={image} />
        <BoardTitle>
          <Title>{title}</Title>
        </BoardTitle>
        <IconContainer favourite={favourite}>
          {!favourite && (
            <IconButton onClick={stop}>
              <Icon name="close" siz="small" />
            </IconButton>
          )}
          <IconButton onClick={stop}>
            <Icon name="star outline" />
          </IconButton>
        </IconContainer>
      </ItemLink>
    </ItemContainer>
  );
}
