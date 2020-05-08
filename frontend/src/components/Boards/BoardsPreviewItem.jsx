import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { SocketContext } from '@context/socket.context';
import {
  Fade,
  StyledLink,
  PreviewBlock,
  PreviewTitle,
  PreviewBottom,
  PreviewTeamTitlte,
} from './boards-style';

export default function PreviewDnd(props) {
  const { updateFavourite } = useContext(SocketContext);
  const { board, wrapped, dragStatus, forwardRef, opacity, onDragEnd, index, favouriteId } = props;
  const { _id, background, color, title, favourite } = board;
  const actionHandler = () =>
    updateFavourite({ boardId: _id, teamId: favouriteId, remove: favourite });

  const test = () => onDragEnd(index);

  const stopAction = (e) => e.preventDefault();
  return (
    <StyledLink
      to={`/board/${_id}`}
      image={background?.image}
      color={color}
      onDragStart={!dragStatus ? stopAction : null}
      style={{ opacity }}
      ref={forwardRef}
      onDragEnd={test}
    >
      <Fade />
      <PreviewBlock>
        <PreviewTitle>{title}</PreviewTitle>
        <PreviewBottom favourite={favourite} onClick={stopAction}>
          <PreviewTeamTitlte>{wrapped && ''}</PreviewTeamTitlte>
          <Icon name="star outline" onClick={actionHandler} />
        </PreviewBottom>
      </PreviewBlock>
    </StyledLink>
  );
}
