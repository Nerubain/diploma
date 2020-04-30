import React from 'react';

import FriendItem from './FriendItem';
import { FriendListContainer, FriendListWrapper } from './style';

export default function FriendList({ onClick, chats, selected }) {
  return (
    <FriendListContainer>
      <FriendListWrapper>
        {chats.map((chat, index) => (
          <FriendItem
            user={chat.user}
            id={chat.id}
            selected={selected}
            onClick={onClick}
            index={index}
            key={chat.id}
          />
        ))}
      </FriendListWrapper>
    </FriendListContainer>
  );
}
