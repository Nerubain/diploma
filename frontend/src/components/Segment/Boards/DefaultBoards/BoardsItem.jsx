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
} from '../../style';

export default function BoardsItem({ content }) {
  const stop = (e) => e.preventDefault();

  return (
    <ItemContainer>
      <ItemLink to="/nerub/board">
        <ItemBackground image={content.img} />
        <SmallImage image={content.img} />
        <BoardTitle>
          <Title>{content.title}</Title>
        </BoardTitle>
        <IconContainer>
          <IconButton onClick={stop}>
            <Icon name="close" siz="small" />
          </IconButton>
          <IconButton onClick={stop}>
            <Icon name="star outline" />
          </IconButton>
        </IconContainer>
      </ItemLink>
    </ItemContainer>
  );
}
