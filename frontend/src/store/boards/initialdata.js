const img =
  'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x294/64da2a2ec6a7dd4080b7c800b2593b87/photo-1577800929753-bb4723761a0d.jpg';

export default {
  boards: [
    {
      id: 'board-1',
      favourite: true,
      content: {
        title: 'Доска №1',
        url: '/b/bId/bName',
        img,
      },
    },
    {
      id: 'board-2',
      favourite: true,
      content: {
        title: 'Доска №2',
        url: '/b/bId/bName',
        img,
      },
    },
    {
      id: 'board-3',
      favourite: true,
      content: {
        title: 'Доска №3',
        url: '/b/bId/bName',
        img,
      },
    },
    {
      id: 'board-4',
      favourite: false,
      content: {
        title: 'Доска №4',
        url: '/b/bId/bName',
        img,
      },
    },
    {
      id: 'board-5',
      favourite: false,
      content: {
        title: 'Доска №5',
        url: '/b/bId/bName',
        img,
      },
    },
    {
      id: 'board-6',
      favourite: false,
      content: {
        title: 'Доска №6',
        url: '/b/bId/bName',
        img,
      },
    },
  ],
  categories: [
    {
      id: 'favourite',
      type: 'favourite',
      label: 'Отмеченные',
      icon: 'star',
      favourite: true,
      boardsIds: ['board-1', 'board-2', 'board-3'],
    },
    {
      id: 'personal',
      label: 'Персональные доски',
      icon: 'user',
      type: 'personal',
      boardsIds: ['board-1', 'board-2', 'board-3'],
    },
    {
      id: 'diploma',
      label: 'Дипломная работа',
      // url: '/diploma',
      icon: 'group',
      boardsIds: ['board-4', 'board-5', 'board-6'],
    },
    {
      id: 'timurFront',
      label: 'Фронтенд Тимура',
      // url: '/diploma',
      icon: 'group',
      boardsIds: [],
    },
  ],
};
// categoriesOrder: ['favourite', 'personal', 'diploma', 'timurFront'],
