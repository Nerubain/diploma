import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';

import {
  StyledLink,
  PreviewBlock,
  PreviewTitle,
  Fade,
  PreviewBottom,
  PreviewTeamTitlte,
} from './boards-style';

export default function BoardsPreviewItem(props) {
  const { item, forwardRef, dragStatus, opacity, onDragEnd, index, wrapped } = props;
  const { url, image, color, name, category } = item.content;
  const { dispatch } = useStoreon();

  const addHandler = () => dispatch('boards/toFavourite', item.id);
  const removeHandler = () => dispatch('boards/removeFavourite', item.id);
  const actionHandler = () => (item.favourite ? removeHandler() : addHandler());

  const test = () => onDragEnd(index);

  const stopAction = (e) => e.preventDefault();
  return (
    <StyledLink
      to={url}
      image={image}
      color={color}
      onDragStart={!dragStatus ? stopAction : null}
      style={{ opacity }}
      ref={forwardRef}
      onDragEnd={test}
    >
      <Fade />
      <PreviewBlock>
        <PreviewTitle>{name}</PreviewTitle>
        <PreviewBottom favourite={item.favourite} onClick={stopAction}>
          <PreviewTeamTitlte>{wrapped && category}</PreviewTeamTitlte>
          <Icon name="star outline" onClick={actionHandler} />
        </PreviewBottom>
      </PreviewBlock>
    </StyledLink>
  );
}
