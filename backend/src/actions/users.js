import { Users } from '@models';
import { hashPassword } from '@modules';

export const addUser = user => {
  const { userName, lastOnline, avatar, favourites, personal, teams } = user;
  const newUser = new Users({ ...user, password: hashPassword(user.password) });
  const responseUser = { userName, lastOnline, avatar, favourites, personal, teams };
  newUser.save();
  console.log(newUser);
  return responseUser;
};

export const findUser = query => Users.find(query);
export const findOneUser = query => Users.findOne(query);
export const findOneUserByIdAndUpdate = (id, params) =>
  Users.findOneAndUpdate(({ _id: id }, params));
