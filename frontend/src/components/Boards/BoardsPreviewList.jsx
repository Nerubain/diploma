import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { ModalContext } from '@context/modal.context';
import BoardItemWrapper from '@components/Dnd/BoardItemWrapper';
import PreviewItem from './BoardsPreviewItem';
import Navigation from './BoardsNavigation';
import {
  ListContainer,
  BoardListLabel,
  AddButton,
  BoardLabelTitle,
  ContentContainer,
} from './boards-style';

export default function BoardsPreviewList({ category, boards, showNavigation }) {
  const { selectModal } = useContext(ModalContext);
  const modalHandler = () => selectModal('create_board', category.id, '');
  return (
    <ListContainer>
      <BoardListLabel>
        <Icon name={category.icon} size="large" />
        <BoardLabelTitle>{category.label}</BoardLabelTitle>
        <Navigation show={showNavigation} />
      </BoardListLabel>
      <ContentContainer>
        {boards.map((item, index) =>
          category.favourite ? (
            <BoardItemWrapper key={item.id} id={item.id} index={index} type="preview">
              <PreviewItem item={item} index={index} dragStatus />
            </BoardItemWrapper>
          ) : (
            <PreviewItem key={item.id} item={item} />
          )
        )}

        {!category.favourite && <AddButton onClick={modalHandler}>Создать доску</AddButton>}
      </ContentContainer>
    </ListContainer>
  );
}
