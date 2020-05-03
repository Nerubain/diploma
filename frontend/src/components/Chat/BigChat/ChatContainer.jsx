import React from 'react';

import Left from './LeftContainer';
import Right from './RightContainer';
import { ChatWrapper } from './style';

export default function ChatConatiner() {
  return (
    <ChatWrapper>
      <Left />
      <Right />
    </ChatWrapper>
  );
}
