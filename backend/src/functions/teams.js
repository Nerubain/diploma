import { FindOneBoard } from '@actions';
import { teamsRouter } from '@routes';

export const findBoardsForTeam = async team => {
  const boards = await Promise.all(
    team.boards.map(async _id => {
      const board = await FindOneBoard({ _id });
      return board;
    }),
  );
  const promisedTeam = { id: team._id, members: team.members, boards, title: team.title };
  return promisedTeam;
};

export const test2 = 0;
