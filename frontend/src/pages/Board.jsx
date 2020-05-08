import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useStoreon } from 'storeon/react';
import { useRouteMatch } from 'react-router';

import Layout from '@components/Layout';
import SubMenu from '@components/Board/SubMenu';
import ScrollContext from '@components/Board/ScrollContext';
import BoardContainer from '@components/Board/BoardContainer';
import { SocketContext } from '@context/socket.context';

export default function Board() {
  const { user } = useStoreon('user');
  const { updateBoard } = useContext(SocketContext);
  const [board, setBoard] = useState(null);
  const match = useRouteMatch();

  const updateTitle = (title) => updateBoard({ _id: board._id, title });
  const newColumn = (column) => {
    const newColumns = [...board.columns, column];
    const newOrder = [...board.columnsOrder, column._id];
    const newBoard = { ...board, columns: newColumns, columnsOrder: newOrder };
    return updateBoard(newBoard);
  };

  const newTask = (data) => {
    const newTasks = [...board.tasks, data.task];
    const column = board.columns.find((c) => c._id === data._id);
    column.tasks.push(data.task._id);
    const newColumns = board.columns.map((c) => (c._id === column._id ? column : c));
    const newBoard = { ...board, tasks: newTasks, columns: newColumns };
    return updateBoard(newBoard);
  };

  const updateColumn = (data) => {
    const newColumns = board.columns.map((c) =>
      c._id === data._id ? { ...c, title: data.title } : c
    );
    const newBoard = { ...board, columns: newColumns };
    return updateBoard(newBoard);
  };

  const findBoard = useCallback(() => {
    const selectedBoard = user.teams
      .map((t) => t.boards)
      .flat()
      .find((b) => b._id === match.params.boardId);
    setBoard(selectedBoard);
  }, [match, user]);

  useEffect(() => {
    findBoard();
  }, [findBoard, board, match]);

  return (
    <Layout
      isborder={true.toString()}
      background={board && board.background}
      color={board && board.color}
    >
      {board && (
        <>
          <SubMenu board={board} favouriteId={user.teams[0]._id} updateTitle={updateTitle}>
            asd
          </SubMenu>
          <ScrollContext>
            <BoardContainer
              board={board}
              newColumn={newColumn}
              newTask={newTask}
              updateColumn={updateColumn}
            />
          </ScrollContext>
        </>
      )}
    </Layout>
  );
}
