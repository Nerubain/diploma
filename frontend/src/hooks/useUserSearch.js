import { useState } from 'react';

const useSearch = (users = [], params) => {
  const [search, setSearch] = useState('');

  const onChange = (e) => setSearch(e.target.value);

  const resetSearch = () => setSearch('');

  const filteredUsers = users.filter(
    (user) => user.userName.toLowerCase().indexOf(search.trim().toLowerCase()) !== -1
  );

  return { search, onChange, filteredUsers, resetSearch };
};

export default useSearch;
