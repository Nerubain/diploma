import React from 'react';

import FriendBlock from './FriendBlock';
import { FriendListContainer } from './style';

export default function FriendList({ list }) {
  return (
    <FriendListContainer>
      {list.map((friend) => (
        <FriendBlock friend={friend} key={`${friend.id}+${friend.name}`} />
      ))}
    </FriendListContainer>
  );
}
