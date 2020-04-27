import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { FriendBlock, Avatar, UserName } from './style';

export default function FriendItem({ friend }) {
  const { dispatch } = useStoreon();
  const history = useHistory();

  const chatHandler = (e) => {
    e.preventDefault();
    dispatch('chat_widget/show-friends', { show: true, user: friend });
  };

  const toChatHandler = () => history.push(`/chat/${friend.id}`);

  return (
    <FriendBlock to={`/govno/${friend.id}`} onClick={chatHandler}>
      <Avatar src={friend.image} />
      <UserName>{friend.name}</UserName>
      <Icon name="chat" onClick={toChatHandler} />
    </FriendBlock>
  );
}
