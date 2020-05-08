import { addTeam, findOneUserByIdAndUpdate } from '@actions';

export const createTeam = async (data, socket) => {
  const teamData = { ...data.team, members: [data.userId] };
  const newTeam = addTeam(teamData);
  const params = { $push: { teams: [newTeam._id] } };
  await findOneUserByIdAndUpdate(data.userId, params);
  return socket.emit('created_team', newTeam);
};

export const asd = 0;
