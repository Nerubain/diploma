import React from 'react';

import BoardItemWrapper from '@components/Dnd/BoardItemWrapper';
import BoardsItem from './BoardsItem';
import EmptyList from './EmptyList';
import ListHeader from './ListHeader';
import { ListContainer, ListWrapper } from '../style';

export default function BoardsList({ category, boards, add, remove, status, search }) {
  const showHandler = () => (status ? remove(category.id) : add(category.id));

  const statusIcon = status ? 'minus' : 'plus';
  if (category.favourite && search) return null;
  if (!boards.length && category.favourite)
    return (
      <EmptyList category={category} status={status} icon={statusIcon} handler={showHandler} />
    );
  return (
    !!boards.length && (
      <ListContainer>
        {!search && <ListHeader category={category} status={statusIcon} handler={showHandler} />}
        <ListWrapper show={status || (!status && search)}>
          {boards.map((board, index) =>
            category.favourite ? (
              <BoardItemWrapper key={board.id} index={index} id={board.id} type="segment">
                <BoardsItem id={board.id} content={board.content} favourite={board.favourite} />
              </BoardItemWrapper>
            ) : (
              <BoardsItem
                key={board.id}
                id={board.id}
                content={board.content}
                favourite={board.favourite}
              />
            )
          )}
        </ListWrapper>
      </ListContainer>
    )
  );
}
