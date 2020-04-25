import React, { useState, useCallback, useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import faker from 'faker';

import preloadImages from '@utils/functions/preloadImages';
import ActiveChatsListWidget from './ActiveChatsListWidget';
import DragWindow from './FriendListWindow/DragWindow';
import ActionButton from './ActionButton';
import { WidgetContainer } from './style';

const list = [
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
];

export default function Widget() {
  const { chat } = useStoreon('chat');
  const [loading, setLoading] = useState(true);

  const preloadData = useCallback(async () => {
    setLoading(true);
    try {
      await Promise.all(list.map(preloadImages));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    preloadData();
  }, [preloadData]);

  if (loading) return null;
  return (
    <>
      <WidgetContainer>
        <ActiveChatsListWidget list={list} />
        <ActionButton onlineCount={list.length} />
      </WidgetContainer>
      {chat.selectedChat.show && <DragWindow list={list} />}
    </>
  );
}
