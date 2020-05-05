import { Teams } from '@models';

export const addTeam = team => {
  const newTeam = new Teams(team);
  newTeam.save();
  return newTeam;
};

export const FindTeams = query => Teams.find(query);
export const FindOneTeam = query => Teams.findOne(query);
export const FindOneTeamByIdAndUpdate = (id, params) =>
  Teams.findByIdAndUpdate({ _id: id }, params);
