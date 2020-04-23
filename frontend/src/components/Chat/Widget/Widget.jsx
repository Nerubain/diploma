import React, { useState, useCallback, useEffect } from 'react';
import faker from 'faker';
import { Icon } from 'semantic-ui-react';
// import { storeon } from 'storeon/react';

import preloadImages from '@functions/preloadImages';
import FriendList from './FriendList';
import { WidgetContainer, ShowChatsButton, ButtonRow, FriendsCount } from './style';

const list = [
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
  { id: faker.random.number(), name: faker.name.firstName(), image: faker.image.avatar() },
];

export default function Widget() {
  const [loading, setLoading] = useState(true);
  console.log(list);
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
    <WidgetContainer>
      <FriendList list={list} />
      <ShowChatsButton>
        <ButtonRow>
          <FriendsCount>{`${list.length}`}</FriendsCount>
          <Icon name="user" />
        </ButtonRow>
      </ShowChatsButton>
    </WidgetContainer>
  );
}
