import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';

import { StyledLink, PreviewBlock, PreviewTitle, Fade, IconWrapper } from './boards-style';

export default function BoardsPreviewItem(props) {
  const { item, forwardRef, dragStatus, opacity, onDragEnd, index } = props;
  const { dispatch } = useStoreon();

  const addHandler = () => dispatch('boards/toFavourite', item.id);
  const removeHandler = () => dispatch('boards/removeFavourite', item.id);
  const actionHandler = () => (item.favourite ? removeHandler() : addHandler());

  const test = () => onDragEnd(index);

  const stopAction = (e) => e.preventDefault();
  return (
    <StyledLink
      to={item.content.url}
      image={item.content.image}
      color={item.content.color}
      onDragStart={!dragStatus ? stopAction : null}
      style={{ opacity }}
      ref={forwardRef}
      onDragEnd={test}
    >
      <Fade />
      <PreviewBlock>
        <PreviewTitle>{item.content.name}</PreviewTitle>
        <IconWrapper favourite={item.favourite} onClick={stopAction}>
          <Icon name="star outline" onClick={actionHandler} />
        </IconWrapper>
      </PreviewBlock>
    </StyledLink>
  );
}
