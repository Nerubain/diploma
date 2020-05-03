import React from 'react';

import { Message, MessageText, MessageContent, MessageTime } from './style';

export default function MessageItem({ right, last, message }) {
  return (
    <Message right={right} last={last}>
      <MessageText>
        <MessageContent>
          {message.text}
          <MessageTime right={right}>55:55</MessageTime>
        </MessageContent>
      </MessageText>
    </Message>
  );
}
