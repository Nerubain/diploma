import React, { useContext } from 'react';

import { ChatContext } from '@context/chat.context';
import FriendItem from './FriendItem';
import { FriendListContainer, FriendListWrapper } from './style';

export default function FriendList() {
  // const { filteredList, selected, select } = useContext(ChatContext);
  return (
    <FriendListContainer>
      <FriendListWrapper>
        {/* {filteredList.map((chat, index) => (
          <FriendItem
            user={chat.user}
            id={chat.id}
            selected={selected}
            index={index}
            key={chat.id}
            onClick={select}
          />
        ))} */}
      </FriendListWrapper>
    </FriendListContainer>
  );
}
