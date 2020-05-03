import React from 'react';

import FriendItem from './FriendItem';
import { ActiveChatsContainer, EmptyBlock } from './style';

const emptyLabel = 'Не найдено пользователей с таким именем';

export default function List({ chats, open }) {
  return (
    <ActiveChatsContainer empty={!chats.length}>
      {!chats.length && <EmptyBlock>{emptyLabel}</EmptyBlock>}
      {!!chats.length &&
        chats.map((chat) => <FriendItem chat={chat} key={chat.id} open={open} id={chat.id} />)}
    </ActiveChatsContainer>
  );
}
