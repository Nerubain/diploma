import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import {
  ListContainer,
  BoardListLabel,
  AddButton,
  BoardLabelTitle,
  ContentContainer,
} from '../boards-style';
import { ModalContext } from '../../../context/modal.context';
import PreviewItem from './BoardsPreviewItem';

export default function BoardsPreviewList({ category, list }) {
  const { selectModal } = useContext(ModalContext);

  const modalHandler = () => selectModal('create_board');

  return (
    <ListContainer>
      <BoardListLabel>
        <Icon name={category.icon} />
        <BoardLabelTitle>{category.label}</BoardLabelTitle>
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
