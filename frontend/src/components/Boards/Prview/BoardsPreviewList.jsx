import React from 'react';
import { Icon } from 'semantic-ui-react';

import { ListContainer, BoardListLabel, BoardLabelTitle, ContentContainer } from './style';
import PreviewItem from './BoardsPreviewItem';

export default function BoardsPreviewList({ type, label, list }) {
  return (
    <ListContainer>
      <BoardListLabel>
        <Icon name={type} />
        <BoardLabelTitle>{label}</BoardLabelTitle>
      </BoardListLabel>
      <ContentContainer>
        {list.map(({ id, title, link, img }) => (
          <PreviewItem key={id} link={link} title={title} img={img} />
        ))}
      </ContentContainer>
    </ListContainer>
  );
}
