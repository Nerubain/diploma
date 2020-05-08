import React from 'react';
import { useStoreon } from 'storeon/react';

import BoardItemWrapper from '@components/Dnd/BoardItemWrapper';
import BoardsItem from './BoardsItem';
import EmptyList from './EmptyList';
import ListHeader from './ListHeader';
import { ListContainer, ListWrapper } from '../style';

export default function BoardsList({ team, add, remove, status, search }) {
  const { user } = useStoreon('user');
  const showHandler = () => (status ? remove(team._id) : add(team._id));

  const statusIcon = status ? 'minus' : 'plus';
  if (team.type === 'favourite' && search) return null;
  if (!team.boards.length && team.type === 'favourite')
    return <EmptyList team={team} status={status} icon={statusIcon} handler={showHandler} />;
  return (
    !!team.boards.length && (
      <ListContainer>
        {!search && <ListHeader team={team} status={statusIcon} handler={showHandler} />}
        <ListWrapper show={status || (!status && search)}>
          {team.boards.map((board, index) =>
            team.type === 'favourite' ? (
              <BoardItemWrapper key={board._id} index={index} id={board._id} type="segment">
                <BoardsItem board={board} teamTitle={team.title} favouriteId={user.teams[0]._id} />
              </BoardItemWrapper>
            ) : (
              <BoardsItem
                key={board._id}
                board={board}
                teamTitle={team.title}
                favouriteId={user.teams[0]._id}
              />
            )
          )}
        </ListWrapper>
      </ListContainer>
    )
  );
}
