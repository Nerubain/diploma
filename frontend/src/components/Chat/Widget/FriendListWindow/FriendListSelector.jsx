import React, { useEffect, useRef, useContext } from 'react';
import { Input } from 'semantic-ui-react';

import { ChatContext } from '@context/chat.context';
import List from './List';

export default function FriendListSelector({ chats, open }) {
  const { search, onChange } = useContext(ChatContext);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  return (
    <>
      <List chats={chats} open={open} />
      <Input
        fluid
        value={search}
        onChange={onChange}
        placeholder="Начните вводить имя.."
        icon="search"
        iconPosition="left"
        ref={searchRef}
      />
    </>
  );
}
