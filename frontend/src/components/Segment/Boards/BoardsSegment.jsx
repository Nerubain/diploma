import React, { useRef, useEffect, useContext, useState } from 'react';
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
import { ModalContext } from '../../../context/modal.context';

export default function BoardsSegment() {
  const [activeList, setActive] = useState([]);
  const input = useRef();
  const { boards } = useStoreon('boards');
  const { segment, boardsRef, close } = useContext(SegmentContext);
  const { selectModal } = useContext(ModalContext);

  const addToActive = (id) => {
    const newActive = [...activeList];
    newActive.push(id);
    setActive(newActive);
    localStorage.setItem('active', JSON.stringify({ list: newActive }));
  };

  const modalHandler = () => {
    close();
    selectModal('create_board');
  };

  const removeFromActive = (id) => {
    let newActive = [...activeList];
    newActive = newActive.filter((item) => item !== id);
    setActive(newActive);
    localStorage.setItem('active', JSON.stringify({ list: newActive }));
  };

  useEffect(() => {
    const activeItems = localStorage.getItem('active');
    if (activeItems) {
      const value = JSON.parse(activeItems);
      setActive(value.list);
    }
  }, []);

  useEffect(() => {
    if (input.current) input.current.focus();
  }, [segment]);

  return (
    <ContextSegment show={segment.type === 'boards'} ref={boardsRef}>
      <ContainerSegment>
        <ContextContainer>
          <Input icon="search" placeholder="Поиск по названию.." ref={input} />
          {boards.categoriesOrder.map((categoryId) => {
            const category = boards.categories.find((ctg) => ctg.id === categoryId);
            const list = category.boardIds.map((boardId) =>
              boards.list.find((board) => board.id === boardId)
            );
            const activeStatus = activeList.find((item) => item === categoryId);

            if (category.favourite)
              return (
                <DndBoardsList
                  key={category.id}
                  column={category}
                  list={list}
                  add={addToActive}
                  remove={removeFromActive}
                  status={!!activeStatus}
                />
              );
            return (
              !!list.length && (
                <BoardsList
                  key={category.id}
                  column={category}
                  list={list}
                  add={addToActive}
                  remove={removeFromActive}
                  status={!!activeStatus}
                />
              )
            );
          })}
          <ButtonsContainer>
            <AddBoardButton onClick={modalHandler}>Создать доску..</AddBoardButton>

            {/* <AddBoardButton>Создать команду...</AddBoardButton> */}
          </ButtonsContainer>
        </ContextContainer>
      </ContainerSegment>
    </ContextSegment>
  );
}
