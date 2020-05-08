import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useSearch from '@hooks/useUserSearch';

export const ChatContext = createContext({});

export const ChatProvider = ({ children, messages, chats }) => {
  const [selected, setSelected] = useState(null);
  // const { search, onChange, filteredList, resetSearch } = useSearch([chats], ['user', 'name']);
  const params = useParams();
  const chat = chats.find((c) => c.id === selected);
  const selectedChat = { user: chat ? { ...chat.user } : {}, ...messages()[selected] };

  const select = (e) => setSelected(e ? e.target.dataset.id : null);

  useEffect(() => {
    if (params.id) setSelected(params.id);
  }, [params]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        selected,
        select,
        // search,
        // onChange,
        // filteredList,
        // resetSearch,
        chats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
