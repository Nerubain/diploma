import React, { useContext } from 'react';

import { ChatContext } from '@context/chat.context';
import ChatBlock from './ChatBlock';
import NotSelected from './NotSelected';
import { RightContainer } from './style';

export default function Right() {
  const { selectedChat } = useContext(ChatContext);
  // console.log(listHeight);
  // console.log(value.replace(/(?:\r\n|\r|\n)/g, '<br />').replace(/<br\s*\/?>/gm, '\n'));
  // console.log(value.replace(/(?:\r\n|\r|\n)/g, '<br />'));

  return (
    <RightContainer show={!!selectedChat}>
      {selectedChat?.messages ? (
        <ChatBlock selectedChat={selectedChat} messages={selectedChat} />
      ) : (
        <NotSelected />
      )}
    </RightContainer>
  );
}
