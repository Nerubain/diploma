import React, { useRef, useEffect } from 'react';

import Message from './MessageItem';
import { MessagesContainer, Messages } from './style';

export default function MessagesList({ messages }) {
  const ref = useRef(null);

  const scrollToBottom = () => {
    ref.current.scrollTop = ref.current.scrollHeight + 100;
  };

  useEffect(() => {
    if (ref.current) {
      scrollToBottom();
    }
  }, []);

  return (
    <MessagesContainer ref={ref}>
      <Messages>
        {messages.messages.map((message, index) => {
          const right = message.author === '123';
          const last = messages.messages[index].author !== messages.messages[index - 1]?.author;
          return <Message key={message.id} right={right} last={last} message={message} />;
        })}
      </Messages>
    </MessagesContainer>
  );
}
