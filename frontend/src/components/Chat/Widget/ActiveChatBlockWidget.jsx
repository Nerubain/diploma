import React from 'react';
import { useStoreon } from 'storeon/react';

import { FriendContainer, FriendAvatar, OnlineStatus } from './style';

export default function ActiveChatBlockWidget({ friend }) {
  const { id, image, name } = friend;
  const { dispatch } = useStoreon();

  const chatHandler = (e) => {
    e.preventDefault();
    dispatch('chat_widget/show-friends', { show: true, id: friend.id });
  };

  return (
    <FriendContainer data-tip data-for={`${id}_${name}`} onClick={chatHandler} to={`/govno/${id}`}>
      <FriendAvatar src={image} />
      <OnlineStatus />
    </FriendContainer>
  );
}
