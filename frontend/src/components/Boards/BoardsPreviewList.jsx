import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { useStoreon } from 'storeon/react';

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
  favourite: 'star',
  personal: 'user',
  default: 'group',
};

export default function BoardsPreviewList({ team, showNavigation }) {
  const { selectModal } = useContext(ModalContext);
  const { user } = useStoreon('user');
  const modalHandler = () => selectModal('create_board', team._id, '');
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
              <PreviewItem
                board={board}
                index={index}
                team={team.title}
                favouriteId={user.teams[0]._id}
                dragStatus
              />
            </BoardItemWrapper>
          ) : (
            <PreviewItem
              key={board._id}
              board={board}
              team={team.title}
              favouriteId={user.teams[0]._id}
            />
          )
        )}

        {team.type !== 'favourite' && <AddButton onClick={modalHandler}>Создать доску</AddButton>}
      </ContentContainer>
    </ListContainer>
  );
}
