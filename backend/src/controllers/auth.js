import { addUser, findOneUser, FindTeams } from '@actions';
import { comparePasswords } from '@modules';
import { findBoardsForTeam } from '@functions';

export const joinUser = async (req, res) => {
  try {
    const { body } = req;
    const isUserExist = await findOneUser({ login: body.user.login });
    if (isUserExist) return res.status(409).send({ error: 'Такой пользователь уже существует' });
    const user = await addUser({ ...body.user, favourites: [], personal: [], teams: [] });
    return res.send(user);
  } catch (error) {
    return console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { body } = req;

    const existedUser = await findOneUser({ login: body.login });
    if (!existedUser) return res.status(404).send({ error: 'Неверный логин или пароль' });

    const checkPasswords = comparePasswords(body.password, existedUser.password);
    if (!checkPasswords) return res.status(404).send({ error: 'Неверный логин или пароль' });

    const teams = await FindTeams({ members: existedUser._id.toString() });
    const teamsWithBoards = await Promise.all(teams.map(findBoardsForTeam));

    const responseUser = {
      id: existedUser._id,
      userName: existedUser.userName,
      avatar: existedUser.avatar,
      lastOnline: existedUser.lastOnline,
      favourites: existedUser.favourites,
      personal: existedUser.personal,
      teams: teamsWithBoards,
    };
    return res.send(responseUser);
  } catch (error) {
    return console.log(error);
  }
};
