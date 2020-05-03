import faker from 'faker';

export const chats = [
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      image: faker.image.avatar(),
    },
  },
];

export const messages = () =>
  chats.reduce((object, item) => {
    const size = faker.random.number(30);
    const messagesCount = Array(size).fill(size);
    object[item.id] = {
      id: item.id,
      messages: messagesCount.map(() => ({
        id: faker.random.uuid(),
        author: faker.random.number(1) ? faker.random.uuid() : '123',
        text: faker.random.words(10),
      })),
    };
    return object;
  }, {});
