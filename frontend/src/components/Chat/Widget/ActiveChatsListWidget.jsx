import React from 'react';
import ReactToolTip from 'react-tooltip';

import ActiveChatBlockWidget from './ActiveChatBlockWidget';
import { ActiveChatsListContainer, FriendName } from './style';

export default function ActiveChatsListWidget({ chats, open }) {
  console.log(chats);
  return (
    <ActiveChatsListContainer>
      {chats.map((chat) => (
        <React.Fragment key={`${chat.id}`}>
          <ActiveChatBlockWidget chat={chat.user} chatId={chat.id} open={open} />
          <ReactToolTip place="right" effect="solid" id={`${chat.id}_${chat.name}`}>
            <FriendName>{chat.name}</FriendName>
          </ReactToolTip>
        </React.Fragment>
      ))}
    </ActiveChatsListContainer>
  );
}
