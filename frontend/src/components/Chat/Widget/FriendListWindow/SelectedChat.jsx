import React, { useState } from 'react';
import faker from 'faker';

import EmojiInput from '@components/EmojiImput';
import MessagesList from './Messages/MessagesList';

const style = {
  position: 'absolute',
  height: 254,
  top: 70,
  right: 10,
};

const messages = [
  {
    id: faker.random.number(),
    author: 'user1',
    message: faker.random.words(4),
  },
  {
    id: faker.random.number(),
    author: 'user1',
    message: faker.random.words(4),
  },
  {
    id: faker.random.number(),
    author: 'user1',
    message: faker.random.words(4),
  },
  {
    id: faker.random.number(),
    author: 'user1',
    message: faker.random.words(4),
  },
  {
    id: faker.random.number(),
    author: 'Nerubain',
    message: faker.random.words(4),
  },
  {
    id: faker.random.number(),
    author: 'Nerubain',
    message: faker.random.words(4),
  },
  {
    id: faker.random.number(),
    author: 'user1',
    message: faker.random.words(4),
  },
];

export default function SelectedChat({ user }) {
  const [msgs, setMsgs] = useState(messages);

  const newMessage = (message) => {
    if (!message.message) return null;
    return setMsgs((prev) => [message, ...prev]);
  };

  return (
    <>
      <MessagesList messages={msgs} />
      <EmojiInput style={style} to={user} add={newMessage} />
    </>
  );
}
