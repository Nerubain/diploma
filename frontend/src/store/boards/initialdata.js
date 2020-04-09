const img =
  'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x294/64da2a2ec6a7dd4080b7c800b2593b87/photo-1577800929753-bb4723761a0d.jpg';

export default {
  list: [
    {
      id: 'board-1',
      favourite: false,
      content: {
        title: 'Доска №1',
        url: '/b/bId/bName',
        img,
      },
    },
    {
      id: 'board-2',
      favourite: false,
      content: {
        title: 'Доска №2',
        url: '/b/bId/bName',
        img,
      },
    },
    {
      id: 'board-3',
      favourite: false,
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
      label: 'Отмеченные',
      icon: 'star',
      favourite: true,
      boardIds: [],
    },
    {
      id: 'personal',
      label: 'Персональные доски',
      icon: 'user',
      boardIds: ['board-1', 'board-2', 'board-3'],
    },
    {
      id: 'diploma',
      label: 'Дипломная работа',
      url: '/diploma',
      icon: 'group',
      boardIds: ['board-4', 'board-5', 'board-6'],
    },
    {
      id: 'timur-front',
      label: 'Фронтенд Тимура',
      url: '/diploma',
      icon: 'group',
      boardIds: [],
    },
  ],
  categoriesOrder: ['favourite', 'personal', 'diploma', 'timur-front'],
};
