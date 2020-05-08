// import initialdata from './initialdata';
import update from 'immutability-helper';
import { createBoard, createTeam, updatedFavourite } from './storeonFunctions';

export default (store) => {
  store.on('@init', () => ({ user: null }));

  store.on('user/setUser', ({ user }, data) => ({ user: data }));

  store.on('user/create_board', createBoard);

  store.on('user/create_team', createTeam);

  store.on('user/updatedFavourite', updatedFavourite);

  store.on('user/boardsDragEnd', ({ user }, result) => {
    const { dragIndex, hoverIndex } = result;
    const favourite = user.teams[0];
    const dragBoard = favourite.boards[dragIndex];
    const newFavourite = {
      ...favourite,
      boards: update(favourite.boards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragBoard],
        ],
      }),
    };
    const newTeams = user.teams.map((team, index) => (index === 0 ? newFavourite : team));
    return { user: { ...user, teams: newTeams } };
  });
};
