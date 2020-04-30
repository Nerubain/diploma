import { useState } from 'react';

const useSearch = (list = [], params) => {
  const [search, setSearch] = useState('');

  const onChange = (e) => setSearch(e.target.value);

  const resetSearch = () => setSearch('');

  const recursionObjectParams = (object, count = 0) => {
    if (count + 1 === params.length) return object[params[count]];
    return recursionObjectParams(object[params[count]], count + 1);
  };

  const filteredList = list.filter((item) => {
    return recursionObjectParams(item).toLowerCase().indexOf(search.trim().toLowerCase()) !== -1;
  });

  return { search, onChange, filteredList, resetSearch };
};

export default useSearch;
