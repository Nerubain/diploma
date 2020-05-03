import React from 'react';

import Message from './Message';
import { MessagesWrapper, Messages, MessagesListContainer } from './style';

export default function MessagesList({ height, forwardRef, messages }) {
  return (
    <MessagesWrapper height={height} ref={forwardRef}>
      <Messages height={height}>
        <MessagesListContainer>
          {messages.messages.map((message, index, arr) => {
            return (
              <Message
                message={message}
                last={message.author !== messages[index - 1]?.author}
                right={message.author === '123'}
                key={message.id}
              />
            );
          })}
        </MessagesListContainer>
      </Messages>
    </MessagesWrapper>
  );
}
