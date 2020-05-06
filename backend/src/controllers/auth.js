import { addUser, findOneUser, FindTeams } from '@actions';
import { comparePasswords } from '@modules';
import { findBoardsForTeam } from '@functions';

export const joinUser = async (data, socket) => {
  try {
    const isUserExist = await findOneUser({ login: data.login });
    if (isUserExist)
      return socket.emit('loginError', { error: 'Такой пользователь уже существует' });
    const user = await addUser({ ...data, teams: [] });
    return socket.emit('joined', user);
  } catch (error) {
    return console.log(error);
  }
};

export const loginUser = async (data, socket) => {
  try {
    const existedUser = await findOneUser({ login: data.login });
    if (!existedUser) return socket.emmit('error', { error: 'Неверный логин или пароль' });

    const checkPasswords = comparePasswords(data.password, existedUser.password);
    if (!checkPasswords) return socket.emmit('error', { error: 'Неверный логин или пароль' });

    const teams = await FindTeams({
      $or: [{ members: existedUser._id.toString() }, { owner: existedUser._id.toString() }],
    });
    const teamsWithBoards = await Promise.all(teams.map(findBoardsForTeam));

    const responseUser = {
      id: existedUser._id,
      userName: existedUser.userName,
      avatar: existedUser.avatar,
      lastOnline: existedUser.lastOnline,
      teams: teamsWithBoards,
    };
    return socket.emit('login', responseUser);
  } catch (error) {
    return console.log(error);
  }
};
