// import initialdata from './initialdata';
import {
  createBoard,
  createTeam,
  updatedFavourite,
  onDragEnd,
  updateBoard,
} from './storeonFunctions';

export default (store) => {
  store.on('@init', () => ({ user: null }));

  store.on('user/setUser', ({ user }, data) => ({ user: data }));

  store.on('user/create_board', createBoard);

  store.on('user/create_team', createTeam);

  store.on('user/updatedFavourite', updatedFavourite);

  store.on('user/boardsDragEnd', onDragEnd);

  store.on('user/updateBoard', updateBoard);
};
