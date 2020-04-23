import React from 'react';

import { FriendContainer, FriendAvatar, OnlineStatus } from './style';

export default function FriendBlock({ friend }) {
  return (
    <FriendContainer data-tip data-for={`${friend.id}_${friend.name}`}>
      <FriendAvatar src={friend.image} />
      <OnlineStatus />
    </FriendContainer>
  );
}
