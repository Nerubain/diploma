import { createBoard, FindOneTeamByIdAndUpdate } from '@actions';

export const addBoard = async (data, socket) => {
  const { name, team, color, image } = data;
  const boardData = { title: name, team, background: image, color };
  const board = createBoard(boardData);
  const params = { $push: { boards: [board._id] } };
  await FindOneTeamByIdAndUpdate(data.team, params);
  socket.emit('created_board', { teamId: team, board });
};

export const lol = 0;
