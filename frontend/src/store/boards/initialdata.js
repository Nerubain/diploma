import faker from 'faker';

const image =
  'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x294/64da2a2ec6a7dd4080b7c800b2593b87/photo-1577800929753-bb4723761a0d.jpg';

export default {
  boards: [
    {
      id: 'board-1',
      favourite: true,
      content: {
        name: 'Доска №1',
        url: `/board/${faker.random.uuid()}`,
        image,
      },
    },
    {
      id: 'board-2',
      favourite: true,
      content: {
        name: 'Доска №2',
        url: `/board/${faker.random.uuid()}`,
        image,
      },
    },
    {
      id: 'board-3',
      favourite: true,
      content: {
        name: 'Доска №3',
        url: `/board/${faker.random.uuid()}`,
        image,
      },
    },
    {
      id: 'board-4',
      favourite: false,
      content: {
        name: 'Доска №4',
        url: `/board/${faker.random.uuid()}`,
        category: 'Дипломная работа',
        image,
      },
    },
    {
      id: 'board-5',
      favourite: false,
      content: {
        name: 'Доска №5',
        url: `/board/${faker.random.uuid()}`,
        category: 'Дипломная работа',
        image,
      },
    },
    {
      id: 'board-6',
      favourite: false,
      content: {
        name: 'Доска №6',
        url: `/board/${faker.random.uuid()}`,
        category: 'Дипломная работа',
        image,
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
      icon: 'group',
      boardsIds: ['board-4', 'board-5', 'board-6'],
    },
    {
      id: 'timurFront',
      label: 'Фронтенд Тимура',
      icon: 'group',
      boardsIds: [],
    },
  ],
};
