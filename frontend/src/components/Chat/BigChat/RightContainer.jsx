import React, { useState, useRef, useEffect } from 'react';

import UserTitle from './UserTitle';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';
import { RightContainer } from './style';

export default function Right({ onSelect, selected, messages }) {
  const [value, setValue] = useState('');
  const [listHeight, setListHeight] = useState(103);
  const onChange = (e) => setValue(e.target.value);
  const onHeightChange = (height) => setListHeight(86 + height);
  const messagesRef = useRef(null);

  const scrollToBottom = () => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight + 100;
  };

  useEffect(() => {
    if (messagesRef.current) scrollToBottom();
  }, [selected]);
  // console.log(listHeight);
  // console.log(value.replace(/(?:\r\n|\r|\n)/g, '<br />').replace(/<br\s*\/?>/gm, '\n'));
  // console.log(value.replace(/(?:\r\n|\r|\n)/g, '<br />'));

  return (
    <RightContainer show={!!selected} onClick={onSelect}>
      <UserTitle />
      <MessagesList height={listHeight} forwardRef={messagesRef} messages={messages} />
      <MessageInput onChange={onChange} value={value} onHeightChange={onHeightChange} />
    </RightContainer>
  );
}
