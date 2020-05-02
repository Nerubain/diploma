import initialdata from './initialdata';

export default (store) => {
  store.on('@init', () => ({ user: initialdata }));

  store.on('user/create_team', ({ user }, team) => {
    const newTeams = [...user.teams, team];
    return { user: { ...user, teams: newTeams } };
  });
};
