import React, { useContext } from 'react';

import { ChatContext } from '@context/chat.context';
import { FriendContainer, FriendAvatar, OnlineStatus } from './style';

export default function ActiveChatBlockWidget({ chat, chatId, open }) {
  const { select } = useContext(ChatContext);
  const { id, image, name } = chat;
  const selectChat = (e) => {
    e.preventDefault();
    open();
    select(e);
  };

  return (
    <FriendContainer
      data-id={chatId}
      data-for={`${id}_${name}`}
      onClick={selectChat}
      to={`/govno/${id}`}
    >
      <FriendAvatar src={image} data-id={chatId} />
      <OnlineStatus />
    </FriendContainer>
  );
}
