import React, { useRef, useEffect, useContext } from 'react';
import { useStoreon } from 'storeon/react';
import { Input } from 'semantic-ui-react';

import {
  ContainerSegment,
  ContextSegment,
  ContextContainer,
  ButtonsContainer,
  AddBoardButton,
} from '../style';
import BoardsList from './DefaultBoards/BoardsList';
import DndBoardsList from './DndBoards/DndBoardsList';
import { SegmentContext } from '../../../context/segment.context';

export default function BoardsSegment() {
  const input = useRef();
  const { boards } = useStoreon('boards');
  const { segment, stopPropagation } = useContext(SegmentContext);

  console.log(boards);

  useEffect(() => {
    if (input.current) input.current.focus();
  }, [segment]);

  return (
    <ContextSegment onClick={stopPropagation} show={segment === 'boards'}>
      <ContainerSegment>
        <ContextContainer>
          <Input icon="search" placeholder="Поиск по названию.." ref={input} />
          {boards.categoriesOrder.map((categoryId) => {
            const category = boards.categories.find((ctg) => ctg.id === categoryId);
            const list = category.boardIds.map((boardId) =>
              boards.list.find((board) => board.id === boardId)
            );
            if (category.favourite)
              return <DndBoardsList key={category.id} column={category} list={list} />;
            return <BoardsList key={category.id} column={category} list={list} />;
          })}
          <ButtonsContainer>
            <AddBoardButton>Создать доску...</AddBoardButton>
          </ButtonsContainer>
        </ContextContainer>
      </ContainerSegment>
    </ContextSegment>
  );
}
