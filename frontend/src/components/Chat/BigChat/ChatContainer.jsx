import React from 'react';

import Left from './LeftContainer';
import Right from './RightContainer';
import { ChatWrapper } from './style';

export default function ChatConatiner() {
  console.log('asd');
  return (
    <ChatWrapper>
      <Left />
      <Right />
    </ChatWrapper>
  );
}
