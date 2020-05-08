export const createBoard = ({ user }, data) => {
  const teams = [...user.teams];
  const newTeams = teams.map((team) =>
    team._id === data.teamId ? { ...team, boards: [...team.boards, data.board] } : team
  );
  return { user: { ...user, teams: newTeams } };
};

export const createTeam = ({ user }, team) => {
  const newTeams = [...user.teams, team];
  return { user: { ...user, teams: newTeams } };
};

export const updatedFavourite = ({ user }, data) => {
  const { team, boardId, remove } = data;
  const newTeams = user.teams.map((t, index) => {
    if (index === 0) return team;
    const boards = t.boards.map((board) =>
      board._id === boardId ? { ...board, favourite: !remove } : board
    );
    return { ...t, boards };
  });

  return { user: { ...user, teams: newTeams } };
};
