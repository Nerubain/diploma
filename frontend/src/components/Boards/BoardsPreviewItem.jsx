import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';

import { StyledLink, PreviewBlock, PreviewTitle, Fade, IconWrapper } from './boards-style';

export default function BoardsPreviewItem({ item, forwardRef, dragStatus, opacity }) {
  const { dispatch } = useStoreon();

  const addHandler = () => dispatch('boards/toFavourite', item.id);
  const removeHandler = () => dispatch('boards/removeFavourite', item.id);
  const actionHandler = () => (item.favourite ? removeHandler() : addHandler());

  const stopAction = (e) => e.preventDefault();
  return (
    <StyledLink
      to={item.content.url}
      image={item.content.img}
      onDragStart={!dragStatus ? stopAction : null}
      style={{ opacity }}
      ref={forwardRef}
    >
      <Fade />
      <PreviewBlock>
        <PreviewTitle>{item.content.title}</PreviewTitle>
        <IconWrapper favourite={item.favourite} onClick={stopAction}>
          <Icon name="star outline" onClick={actionHandler} />
        </IconWrapper>
      </PreviewBlock>
    </StyledLink>
  );
}
