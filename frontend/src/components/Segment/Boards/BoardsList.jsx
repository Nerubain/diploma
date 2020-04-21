import React from 'react';

import { ListContainer, ListWrapper } from '../style';
import BoardsItem from './BoardsItem';
import BoardItemWrapper from '../../Dnd/BoardItemWrapper';
import EmptyList from './EmptyList';
import ListHeader from './ListHeader';

export default function BoardsList({ category, boards, add, remove, status, search }) {
  const showHandler = () => (status ? remove(category.id) : add(category.id));
  const display = !!category.boardsIds.length;

  const statusIcon = status ? 'minus' : 'plus';
  if (category.favourite && search) return null;
  return (
    <ListContainer>
      {!search && <ListHeader category={category} status={statusIcon} handler={showHandler} />}
      <ListWrapper show={status}>
        {display ? (
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
