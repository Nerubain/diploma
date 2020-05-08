import { createBoard, FindOneTeamByIdAndUpdate, FindOneBoardByIdAndUpdate } from '@actions';
import { findBoardsForTeam } from '@functions';

export const addBoard = async (data, socket) => {
  const { name, team, color, image } = data;
  const boardData = { title: name, team, background: image, color };
  const board = createBoard(boardData);
  const params = { $push: { boards: [board._id] } };
  await FindOneTeamByIdAndUpdate(data.team, params);
  socket.emit('created_board', { teamId: team, board });
};

export const updateFavourite = async (data, socket) => {
  const { teamId, boardId, remove } = data;
  const params = remove ? { $pull: { boards: boardId } } : { $push: { boards: [boardId] } };
  await FindOneBoardByIdAndUpdate(boardId, { favourite: !remove });
  const newTeam = await FindOneTeamByIdAndUpdate(teamId, params);
  const newTeamBoards = await findBoardsForTeam(newTeam);
  return socket.emit('updatedFavourite', { team: newTeamBoards, boardId, remove });
};
