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
        {messages.map((message, index) => {
          const right = message.author === 'Nerubain';
          const last = messages[index].author !== messages[index - 1]?.author;
          return <Message right={right} last={last} message={message.message} />;
        })}
      </Messages>
    </MessagesContainer>
  );
}
