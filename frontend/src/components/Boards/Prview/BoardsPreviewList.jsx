import React from 'react';

import { Icon } from 'semantic-ui-react';

import { ListContainer, BoardListLabel, BoardLabelTitle, ContentContainer } from '../boards-style';
import PreviewItem from './BoardsPreviewItem';

export default function BoardsPreviewList({ category, list }) {
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
      </ContentContainer>
    </ListContainer>
  );
}
