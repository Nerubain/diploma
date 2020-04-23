import React from 'react';

import { FriendContainer, FriendAvatar, OnlineStatus } from './style';

export default function FriendBlock({ friend }) {
  return (
    <FriendContainer>
      <FriendAvatar src={friend.image} />
      <OnlineStatus />
    </FriendContainer>
  );
}
