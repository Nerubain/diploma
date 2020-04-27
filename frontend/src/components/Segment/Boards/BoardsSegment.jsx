import React, { useRef, useEffect, useContext } from 'react';
import { useStoreon } from 'storeon/react';
import { Input, Icon } from 'semantic-ui-react';

import { SegmentContext } from '@context/segment.context';
import { ModalContext } from '@context/modal.context';
import BoardsList from './BoardsList';
import {
  ContainerSegment,
  ContextSegment,
  ContextContainer,
  ButtonsContainer,
  AddBoardButton,
  MobileSegmentListWrapper,
  SegmentHeader,
  CloseButton,
  SegmentTitle,
} from '../style';

export default function BoardsSegment() {
  const { dispatch, boards, openMenus } = useStoreon('boards', 'openMenus');
  const { boardsRef, close, searchHandler, search } = useContext(SegmentContext);
  const { selectModal } = useContext(ModalContext);
  const input = useRef();
  const showHeader = window.innerWidth <= 600;

  const filteredBoards = boards.boards.filter((board) => {
    return board.content.name.toLowerCase().indexOf(search.trim().toLowerCase()) !== -1;
  });

  const label = search ? `Создать доску с именем "${search}"` : 'Создать доску...';

  const modalHandler = () => {
    close();
    selectModal('create_board', 'personal', search);
  };

  const addToActive = (id) => dispatch('segment/open', id);
  const removeFromActive = (id) => dispatch('segment/close', id);

  useEffect(() => {
    if (input.current) input.current.focus();
  }, []);

  return (
    <ContextSegment ref={boardsRef}>
      <ContainerSegment>
        <ContextContainer>
          {showHeader && (
            <SegmentHeader>
              <SegmentTitle>Доски</SegmentTitle>
              <CloseButton onClick={close}>
                <Icon name="close" />
              </CloseButton>
            </SegmentHeader>
          )}
          <Input
            icon="search"
            placeholder="Поиск по названию.."
            ref={input}
            value={search}
            onChange={searchHandler}
          />
          <MobileSegmentListWrapper>
            {boards.categories.map((category) => {
              const boardsList = category.boardsIds
                .map((id) => filteredBoards.find((board) => board.id === id))
                .filter((id) => id);
              const activeStatus = openMenus.find((item) => item === category.id);

              return (
                <BoardsList
                  key={category.id}
                  category={category}
                  boards={boardsList}
                  add={addToActive}
                  remove={removeFromActive}
                  status={!!activeStatus}
                  search={search}
                />
              );
            })}
          </MobileSegmentListWrapper>
          <ButtonsContainer>
            <AddBoardButton onClick={modalHandler}>{label}</AddBoardButton>
          </ButtonsContainer>
        </ContextContainer>
      </ContainerSegment>
    </ContextSegment>
  );
}
