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
  const { board, forwardRef, dragStatus, opacity, onDragEnd, index, wrapped } = props;
  const { _id, background, color, title, category } = board;
  const { dispatch } = useStoreon();

  const addHandler = () => dispatch('boards/toFavourite', board.id);
  const removeHandler = () => dispatch('boards/removeFavourite', board.id);
  const actionHandler = () => (board.favourite ? removeHandler() : addHandler());

  const test = () => onDragEnd(index);

  const stopAction = (e) => e.preventDefault();
  return (
    <StyledLink
      to={`/board/${_id}`}
      image={background.image}
      color={color}
      onDragStart={!dragStatus ? stopAction : null}
      style={{ opacity }}
      ref={forwardRef}
      onDragEnd={test}
    >
      <Fade />
      <PreviewBlock>
        <PreviewTitle>{title}</PreviewTitle>
        <PreviewBottom favourite={board.favourite} onClick={stopAction}>
          <PreviewTeamTitlte>{wrapped && category}</PreviewTeamTitlte>
          <Icon name="star outline" onClick={actionHandler} />
        </PreviewBottom>
      </PreviewBlock>
    </StyledLink>
  );
}
