import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';

import { FriendBlock, Avatar, UserName } from './style';

export default function FriendItem({ friend }) {
  const { dispatch } = useStoreon();

  const chatHandler = (e) => {
    e.preventDefault();
    dispatch('chat_widget/show-friends', { show: true, id: friend.id });
  };

  return (
    <FriendBlock to={`/govno/${friend.id}`} onClick={chatHandler}>
      <Avatar src={friend.image} />
      <UserName>{friend.name}</UserName>
      <Icon name="chat" />
    </FriendBlock>
  );
}
