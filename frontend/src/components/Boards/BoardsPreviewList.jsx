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

const icons = {
  favourite: 'favourite',
  personal: 'user',
  default: 'users',
};

export default function BoardsPreviewList({ team, showNavigation }) {
  const { selectModal } = useContext(ModalContext);
  const modalHandler = () => selectModal('create_board', team.id, '');
  return (
    <ListContainer>
      <BoardListLabel>
        <Icon name={icons[team.type]} size="large" />
        <BoardLabelTitle>{team.title}</BoardLabelTitle>
        {showNavigation && <Navigation />}
      </BoardListLabel>
      <ContentContainer>
        {team.boards.map((board, index) =>
          team.type === 'favourite' ? (
            <BoardItemWrapper key={board._id} id={board._id} index={index} type="preview">
              <PreviewItem board={board} index={index} dragStatus />
            </BoardItemWrapper>
          ) : (
            <PreviewItem key={board._id} board={board} />
          )
        )}

        {team.type !== 'favourite' && <AddButton onClick={modalHandler}>Создать доску</AddButton>}
      </ContentContainer>
    </ListContainer>
  );
}
