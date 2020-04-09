import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';

import { StyledLink, PreviewBlock, PreviewTitle, Fade, IconWrapper } from '../boards-style';

export default function BoardsPreviewItem({ item, favourite, id }) {
  const { dispatch } = useStoreon('boards');

  const addHandler = () => dispatch('boards/toFavourite', id);
  const removeHandler = () => dispatch('boards/removeFavourite', id);
  const actionHandler = () => (favourite ? removeHandler() : addHandler());

  const stopAction = (e) => e.preventDefault();
  return (
    <StyledLink to={item.url} image={item.img} onDragStart={stopAction}>
      <Fade />
      <PreviewBlock>
        <PreviewTitle>{item.title}</PreviewTitle>
        <IconWrapper favourite={favourite} onClick={stopAction}>
          <Icon name="star outline" onClick={actionHandler} />
        </IconWrapper>
      </PreviewBlock>
    </StyledLink>
  );
}
