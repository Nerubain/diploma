/* eslint-disable no-shadow */
import update from 'immutability-helper';
import initialdata from './initialdata';

export default (store) => {
  store.on('@init', () => ({ boards: initialdata }));

  store.on('boards/dragEnd', ({ boards }, result) => {
    const { dragIndex, hoverIndex } = result;
    const newCategories = [...boards.categories];

    const favourite = newCategories.find((categ) => categ.type === 'favourite');
    const dragCard = favourite.boardsIds[dragIndex];
    const newCategory = {
      ...favourite,
      boardsIds: update(favourite.boardsIds, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }),
    };
    const newBoards = {
      ...boards,
      categories: newCategories.map((ctg) => (ctg.type === 'favourite' ? newCategory : ctg)),
    };
    return { boards: newBoards };
  });

  store.on('boards/toFavourite', ({ boards }, id) => {
    const newCategories = [...boards.categories];
    const newBoards = [...boards.boards];

    const favourite = newCategories.find((category) => category.type === 'favourite');
    favourite.boardsIds.push(id);

    const newState = {
      ...boards,
      categories: newCategories.map((ctg) => (ctg.type === 'favourite' ? favourite : ctg)),
      boards: newBoards.map((item) => (item.id === id ? { ...item, favourite: true } : item)),
    };
    return { boards: newState };
  });

  store.on('boards/removeFavourite', ({ boards }, id) => {
    const newCategories = [...boards.categories];
    const newBoards = [...boards.boards];

    const favourite = newCategories.find((category) => category.type === 'favourite');
    favourite.boardsIds = favourite.boardsIds.filter((boardId) => boardId !== id);

    const newState = {
      ...boards,
      categories: newCategories.map((ctg) => (ctg.id === 'favourite' ? favourite : ctg)),
      boards: newBoards.map((item) => (item.id === id ? { ...item, favourite: false } : item)),
    };
    return { boards: newState };
  });

  store.on('boards/create', ({ boards }, board) => {
    const category = boards.categories.find((ctg) => ctg.id === board.team);
    const newBoard = {
      id: `board-${boards.boards.length + 1}`,
      favourite: false,
      content: { ...board, category: category.label },
    };
    const newCategory = { ...category, boardsIds: [...category.boardsIds, newBoard.id] };

    const newState = {
      ...boards,
      boards: [...boards.boards, newBoard],
      categories: boards.categories.map((ctg) => (ctg.id === board.team ? newCategory : ctg)),
    };

    return { boards: newState };
  });
};
