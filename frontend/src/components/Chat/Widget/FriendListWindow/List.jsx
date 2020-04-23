import React from 'react';

import FriendItem from './FriendItem';
import { ActiveChatsContainer, EmptyBlock } from './style';

const emptyLabel = 'Не найдено пользователей с таким именем';

export default function List({ list }) {
  return (
    <ActiveChatsContainer empty={!list.length}>
      {!list.length && <EmptyBlock>{emptyLabel}</EmptyBlock>}
      {!!list.length && list.map((item) => <FriendItem friend={item} key={item.id} />)}
    </ActiveChatsContainer>
  );
}
