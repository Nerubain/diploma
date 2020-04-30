import React from 'react';

import { MessageContainer, MessageText, MessageContent, MessageTime } from './style';

export default function Message({ message, last, right }) {
  return (
    <MessageContainer right={right} last={last}>
      <MessageText>
        <MessageContent>
          {message.text}
          <MessageTime right={right}>55:55</MessageTime>
        </MessageContent>
      </MessageText>
    </MessageContainer>
  );
}
