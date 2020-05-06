import { Users } from '@models';
import { hashPassword } from '@modules';
import { nanoid } from 'nanoid';
import { addInitialTeams } from './teams';

export const addUser = user => {
  const id = nanoid();
  const { userName, lastOnline, avatar, favourites, personal } = user;
  const teams = addInitialTeams(id);
  const newUser = new Users({
    ...user,
    _id: id,
    password: hashPassword(user.password),
    teams: teams.ids,
  });
  const responseUser = {
    id,
    userName,
    lastOnline,
    avatar,
    favourites,
    personal,
    teams: teams.datas,
  };
  newUser.save();
  return responseUser;
};

export const findUser = query => Users.find(query);
export const findOneUser = query => Users.findOne(query);
export const findOneUserByIdAndUpdate = (id, params) =>
  Users.findOneAndUpdate(({ _id: id }, params));
