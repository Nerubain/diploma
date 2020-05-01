import React, { useState, useRef, useEffect } from 'react';

import UserTitle from './UserTitle';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';

export default function ChatBlock({ onSelect, selectedChat, messages }) {
  const [value, setValue] = useState('');
  const [listHeight, setListHeight] = useState(103);
  const messagesRef = useRef(null);

  const onChange = (e) => setValue(e.target.value);

  const onHeightChange = (height) => setListHeight(86 + height);

  const scrollToBottom = () => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight + 100;
  };

  useEffect(() => {
    setValue('');
    if (messagesRef.current) scrollToBottom();
  }, [selectedChat]);
  return (
    <>
      <UserTitle />
      <MessagesList height={listHeight} forwardRef={messagesRef} messages={messages} />
      <MessageInput onChange={onChange} value={value} onHeightChange={onHeightChange} />
    </>
  );
}
