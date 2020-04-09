/* eslint-disable no-shadow */
import initialdata from './initialdata';

export default (store) => {
  store.on('@init', () => ({ boards: initialdata }));

  store.on('boards/drag', ({ boards }, result) => {
    const { destination, source, draggableId } = result;
    const newCategories = [...boards.categories];
    if (!destination) return null;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return null;
    }
    const category = newCategories.find((categ) => categ.id === source.droppableId);
    const newBoardIds = [...category.boardIds];
    newBoardIds.splice(source.index, 1);
    newBoardIds.splice(destination.index, 0, draggableId);
    const newCategory = {
      ...category,
      boardIds: newBoardIds,
    };
    const newBoards = {
      ...boards,
      categories: newCategories.map((ctg) => (ctg.id === source.droppableId ? newCategory : ctg)),
    };
    return { boards: newBoards };
  });

  store.on('boards/toFavourite', ({ boards }, id) => {
    const newCategories = [...boards.categories];
    const newList = [...boards.list];

    const favourite = newCategories.find((category) => category.id === 'favourite');
    favourite.boardIds.push(id);

    const newBoards = {
      ...boards,
      categories: newCategories.map((ctg) => (ctg.id === 'favourite' ? favourite : ctg)),
      list: newList.map((item) => (item.id === id ? { ...item, favourite: true } : item)),
    };
    return { boards: newBoards };
  });

  store.on('boards/removeFavourite', ({ boards }, id) => {
    const newCategories = [...boards.categories];
    const newList = [...boards.list];

    const favourite = newCategories.find((category) => category.id === 'favourite');
    favourite.boardIds = favourite.boardIds.filter((boardId) => boardId !== id);

    const newBoards = {
      ...boards,
      categories: newCategories.map((ctg) => (ctg.id === 'favourite' ? favourite : ctg)),
      list: newList.map((item) => (item.id === id ? { ...item, favourite: false } : item)),
    };
    return { boards: newBoards };
  });
};
