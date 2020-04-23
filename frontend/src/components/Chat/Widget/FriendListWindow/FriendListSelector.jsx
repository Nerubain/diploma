import React, { useState, useEffect, useRef } from 'react';
import { Input } from 'semantic-ui-react';

import List from './List';

export default function FriendListSelector({ list }) {
  const [search, setSearch] = useState('');
  const searchRef = useRef(null);

  const searchHandler = (e, { value }) => setSearch(value);
  const filteredList = list.filter((user) => {
    return user.name.toLowerCase().indexOf(search.trim().toLowerCase()) !== -1;
  });

  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  return (
    <>
      <List list={filteredList} />
      <Input
        fluid
        value={search}
        onChange={searchHandler}
        placeholder="Начните вводить имя.."
        icon="search"
        iconPosition="left"
        ref={searchRef}
      />
    </>
  );
}
