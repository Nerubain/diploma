import React from 'react';

import ListHeader from './ListHeader';
import { EmptyListContainer, ListContainer } from '../style';

export default function EmptyList({ category, status, handler, icon }) {
  return (
    <ListContainer>
      <ListHeader category={category} status={icon} handler={handler} />
      {status && (
        <EmptyListContainer>
          Добавляйте в избранное наиболее важные доски, чтобы они всегда были под рукой.
        </EmptyListContainer>
      )}
    </ListContainer>
  );
}
