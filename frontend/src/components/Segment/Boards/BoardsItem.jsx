import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { SocketContext } from '@context/socket.context';
import {
  ItemLink,
  ItemBackground,
  SmallImage,
  BoardTitle,
  Title,
  TeamTitle,
  IconContainer,
  IconButton,
} from '../style';

export default function BoardsItem(props) {
  const { updateFavourite } = useContext(SocketContext);
  const { board, forwardRef, opacity, wrapped, teamTitle, favouriteId } = props;
  const { background, color, favourite, title, _id } = board;

  const disebleAction = (e) => e.preventDefault();

  const actionHandler = () =>
    updateFavourite({ boardId: _id, teamId: favouriteId, remove: favourite });

  return (
    <ItemLink
      to={`/board/${_id}`}
      ref={forwardRef}
      style={{ opacity }}
      onDragStart={!wrapped ? disebleAction : null}
    >
      <ItemBackground image={background?.image} color={color} />
      <SmallImage image={background?.image} color={color} />
      <BoardTitle>
        <Title>{title}</Title>
        {wrapped && <TeamTitle>{teamTitle}</TeamTitle>}
      </BoardTitle>
      <IconContainer favourite={favourite} onClick={disebleAction}>
        <IconButton onClick={actionHandler}>
          <Icon name="star outline" data-icon="icon" />
        </IconButton>
      </IconContainer>
    </ItemLink>
  );
}
