import React from 'react';

import EmojiInput from '@components/EmojiImput';
import MessagesList from './Messages/MessagesList';

const style = {
  position: 'absolute',
  height: 254,
  top: 70,
  right: 10,
};

export default function SelectedChat({ messages }) {
  return (
    <>
      <MessagesList messages={messages} />
      <EmojiInput style={style} />
    </>
  );
}
