import React from 'react';

import BoardItemWrapper from '@components/Dnd/BoardItemWrapper';
import BoardsItem from './BoardsItem';
import EmptyList from './EmptyList';
import ListHeader from './ListHeader';
import { ListContainer, ListWrapper } from '../style';

export default function BoardsList({ category, boards, add, remove, status, search }) {
  const showHandler = () => (status ? remove(category.id) : add(category.id));
  const displayList = !!category.boardsIds.length;

  const statusIcon = status ? 'minus' : 'plus';
  if (category.favourite && search) return null;
  return (
    <ListContainer>
      {!search && <ListHeader category={category} status={statusIcon} handler={showHandler} />}
      <ListWrapper show={status || (!status && search)}>
        {displayList ? (
          boards.map((board, index) =>
            category.favourite ? (
              <BoardItemWrapper key={board.id} index={index} id={board.id} type="segment">
                <BoardsItem
                  board={board.id}
                  content={board.content}
                  favourite={board.favourite}
                  dragStatus={category.favourite}
                />
              </BoardItemWrapper>
            ) : (
              <BoardsItem
                key={board.id}
                board={board.id}
                content={board.content}
                favourite={board.favourite}
                dragStatus={category.favourite}
              />
            )
          )
        ) : (
          <EmptyList />
        )}
      </ListWrapper>
    </ListContainer>
  );
}
