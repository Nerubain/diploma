import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import {
  ListContainer,
  BoardListLabel,
  AddButton,
  BoardLabelTitle,
  ContentContainer,
  LabelLinks,
  LabelLink,
} from '../boards-style';
import { ModalContext } from '../../../context/modal.context';
import PreviewItem from './BoardsPreviewItem';

export default function BoardsPreviewList({ category, list }) {
  const { selectModal } = useContext(ModalContext);

  const modalHandler = () => selectModal('create_board');

  return (
    <ListContainer>
      <BoardListLabel>
        <Icon name={category.icon} size="large" />
        <BoardLabelTitle>{category.label}</BoardLabelTitle>
        {category.url && (
          <LabelLinks>
            <LabelLink to="/nerub/board">
              <Icon name="table" />
              <span>Доски</span>
            </LabelLink>
            <LabelLink to="/nerub/board">
              <Icon name="user" />
              <span>Участники</span>
            </LabelLink>
            <LabelLink to="/nerub/board">
              <Icon name="cog" />
              <span>Настройки</span>
            </LabelLink>
          </LabelLinks>
        )}
      </BoardListLabel>
      <ContentContainer>
        {list.map((item) => (
          <PreviewItem key={item.id} id={item.id} item={item.content} favourite={item.favourite} />
        ))}

        <AddButton onClick={modalHandler}>Создать доску</AddButton>
      </ContentContainer>
    </ListContainer>
  );
}
