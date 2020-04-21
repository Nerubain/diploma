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
import BoardsList from './BoardsList';
import { SegmentContext } from '../../../context/segment.context';
import { ModalContext } from '../../../context/modal.context';

export default function BoardsSegment() {
  const [activeList, setActive] = useState([]);
  const { boards } = useStoreon('boards');
  const { segment, boardsRef, close, searchHandler, search } = useContext(SegmentContext);
  const { selectModal } = useContext(ModalContext);
  const input = useRef();

  const filteredBoards = boards.boards.filter((board) => {
    return board.content.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const label = search ? `Создать доску с именем "${search}"` : 'Создать доску...';

  const addToActive = (id) => {
    const newActive = [...activeList];
    newActive.push(id);
    setActive(newActive);
    localStorage.setItem('active', JSON.stringify({ list: newActive }));
  };

  const modalHandler = () => {
    close();
    selectModal('create_board', 'personal', search);
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
          <Input
            icon="search"
            placeholder="Поиск по названию.."
            ref={input}
            value={search}
            onChange={searchHandler}
          />
          {boards.categories.map((category) => {
            const boardsList = category.boardsIds
              .map((id) => filteredBoards.find((board) => board.id === id))
              .filter((id) => id);
            const activeStatus = activeList.find((item) => item === category.id);

            return (
              !!category.boardsIds.length && (
                <BoardsList
                  key={category.id}
                  category={category}
                  boards={boardsList}
                  add={addToActive}
                  remove={removeFromActive}
                  status={!!activeStatus}
                  search={search}
                />
              )
            );
          })}
          <ButtonsContainer>
            <AddBoardButton onClick={modalHandler}>{label}</AddBoardButton>
          </ButtonsContainer>
        </ContextContainer>
      </ContainerSegment>
    </ContextSegment>
  );
}
