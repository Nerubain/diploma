import initialdata from './initialdata';

export default (store) => {
  store.on('@init', () => ({ user: null }));

  store.on('user/setUser', ({ user }, data) => ({ user: data }));

  store.on('user/create_board', ({ user }, data) => {
    const teams = [...user.teams];
    const newTeams = teams.map((team) =>
      team.id === data.teamId ? { ...team, boards: [...team.boards, data.board] } : team
    );
    return { user: { ...user, teams: newTeams } };
  });

  store.on('user/create_team', ({ user }, team) => {
    const newTeams = [...user.teams, team];
    return { user: { ...user, teams: newTeams } };
  });
};
