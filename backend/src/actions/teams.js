import { Teams } from '@models';
import initialTeam from '../objects/initialTeam';

export const addTeam = team => {
  const newTeam = new Teams(team);
  newTeam.save();
  return newTeam;
};

export const addInitialTeams = id => {
  const personalTeam = new Teams(initialTeam(id, 'personal', 'Персональные доски'));
  const favouriteTeam = new Teams(initialTeam(id, 'favourite', 'Отмеченные доски'));
  personalTeam.save();
  favouriteTeam.save();
  return { ids: [favouriteTeam._id, personalTeam._id], datas: [favouriteTeam, personalTeam] };
};

export const FindTeams = query => Teams.find(query);
export const FindOneTeam = query => Teams.findOne(query);
export const FindOneTeamByIdAndUpdate = (id, params) =>
  Teams.findByIdAndUpdate({ _id: id }, params);
