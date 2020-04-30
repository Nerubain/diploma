import React, { useState } from 'react';
import faker from 'faker';

import Left from './LeftContainer';
import Right from './RightContainer';
import { ChatWrapper } from './style';

const chats = [
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
  {
    id: faker.random.uuid(),
    user: {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
  },
];

// const messages = chats.reduce((chat) => {
//   const size = ~~(Math.random() * 30);
//   const messagesCount = Array(size).fill(size);
//   return {
//     chatId: faker.random.uuid(),
//     messages: messagesCount.map(() => {
//       return {
//         id: faker.random.uuid(),
//         author: faker.random.number(1) ? chat.id : '123',
//         text: faker.random.words(size),
//       };
//     }),
//   };
// });

const messages = () =>
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

console.log(chats, messages);

export default function ChatConatiner() {
  const [selected, setSelected] = useState(null);
  const selectedChat = messages()[selected];
  console.log(selectedChat);
  const select = (e) => setSelected(e.target.dataset.id);

  return (
    <ChatWrapper>
      <Left onSelect={select} selected={selected} chats={chats} />
      <Right onSelect={select} selected={selected} messages={selectedChat} />
    </ChatWrapper>
  );
}
