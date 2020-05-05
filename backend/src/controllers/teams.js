import { addTeam, findOneUserByIdAndUpdate } from '@actions';

export const createTeam = async (req, res) => {
  const { body } = req;
  const newTeam = addTeam(body.team);
  const params = { $push: { teams: [newTeam._id] } };
  const test = await findOneUserByIdAndUpdate(body.userId, params);
  console.log(params);
  return res.send(newTeam);
};

export const asd = 0;
