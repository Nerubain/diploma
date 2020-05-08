import update from 'immutability-helper';

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

export const onDragEnd = ({ user }, result) => {
  const { dragIndex, hoverIndex } = result;
  const favourite = user.teams[0];
  const dragBoard = favourite.boards[dragIndex];
  const newFavourite = {
    ...favourite,
    boards: update(favourite.boards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragBoard],
      ],
    }),
  };
  const newTeams = user.teams.map((team, index) => (index === 0 ? newFavourite : team));
  return { user: { ...user, teams: newTeams } };
};

export const updateBoard = ({ user }, data) => {
  console.log(data);
  const newTeams = user.teams.map((t) => ({
    ...t,
    boards: t.boards.map((b) => (b._id === data._id ? data : b)),
  }));

  return { user: { ...user, teams: newTeams } };
};
