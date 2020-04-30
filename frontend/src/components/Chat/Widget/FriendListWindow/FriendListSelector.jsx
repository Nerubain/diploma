import React, { useEffect, useRef } from 'react';
import { Input } from 'semantic-ui-react';

import useSearch from '@hooks/useSearch';
import List from './List';

export default function FriendListSelector({ list }) {
  const { search, onChange, filteredList } = useSearch(list, ['name']);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  return (
    <>
      <List list={filteredList} />
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
