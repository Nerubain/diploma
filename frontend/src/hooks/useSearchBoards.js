import { useState } from 'react';

const useSearch = (teams = [], params) => {
  const [search, setSearch] = useState('');

  const onChange = (e) => setSearch(e.target.value);

  const resetSearch = () => setSearch('');

  const filteredTeams = teams.map((team) => {
    const boards = team.boards.filter(
      (board) => board.title.toLowerCase().indexOf(search.trim().toLowerCase()) !== -1
    );
    return { ...team, boards };
  });

  return { search, onChange, filteredTeams, resetSearch };
};

export default useSearch;
