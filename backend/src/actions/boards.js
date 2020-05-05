import { Boards } from '@models';

export const FindBoards = query => Boards.find(query);
export const FindOneBoard = query => Boards.findOne(query);
export const FindOneBoardByIdAndUpdate = (id, params) =>
  Boards.findByIdAndUpdate({ _id: id }, params);
