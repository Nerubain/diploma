import React, { useRef, useEffect, useContext, useState } from 'react';
import { Input } from 'semantic-ui-react';

import { ContainerSegment, ContextSegment, ContextContainer } from '../style';
import BoardsList from './DefaultBoards/BoardsList';
import DndBoardsList from './DndBoards/DndBoardsList';
import { SegmentContext } from '../../../context/segment.context';

import img from './image';

const data2 = {
  boards: {
    'board-1': {
      id: 'board-1',
      content: {
        title: 'Доска №1',
        img,
      },
    },
    'board-2': {
      id: 'board-2',
      content: {
        title: 'Доска №2',
        img,
      },
    },
    'board-3': {
      id: 'board-3',
      content: {
        title: 'Доска №3',
        img,
      },
    },
  },
  columns: {
    favourite: {
      id: 'favourite',
      label: 'Отмеченные',
      icon: 'star',
      favourite: true,
      boardIds: ['board-1', 'board-2', 'board-3'],
    },
    recently: {
      id: 'recently',
      label: 'Недавно просмотренные',
      icon: 'clock outline',
      boardIds: ['board-1', 'board-2', 'board-3'],
    },
  },
  columsOrder: ['favourite', 'recently'],
};

export default function BoardsSegment() {
  const input = useRef();
  const [state, setState] = useState(data2);
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return null;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return null;
    }
    const column = state.columns[source.droppableId];
    const newBoardIds = Array.from(column.boardIds);
    newBoardIds.splice(source.index, 1);
    newBoardIds.splice(destination.index, 0, draggableId);

    const newCol = {
      ...column,
      boardIds: newBoardIds,
    };
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newCol.id]: newCol,
      },
    };
    setState(newState);
  };

  const { segment, stopPropagation } = useContext(SegmentContext);

  useEffect(() => {
    if (input.current) input.current.focus();
  }, [segment]);

  return (
    <ContextSegment onClick={stopPropagation} show={segment === 'boards'}>
      <ContainerSegment>
        <ContextContainer>
          <Input icon="search" placeholder="Поиск по названию.." ref={input} />
          {state.columsOrder.map((columnId) => {
            const column = state.columns[columnId];
            const boards = column.boardIds.map((boardId) => state.boards[boardId]);
            if (column.favourite)
              return (
                <DndBoardsList
                  key={column.id}
                  column={column}
                  boards={boards}
                  onDragEnd={onDragEnd}
                />
              );
            return <BoardsList key={column.id} column={column} boards={boards} />;
          })}
        </ContextContainer>
      </ContainerSegment>
    </ContextSegment>
  );
}
