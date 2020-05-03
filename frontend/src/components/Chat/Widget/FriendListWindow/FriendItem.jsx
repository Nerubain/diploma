import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { ChatContext } from '@context/chat.context';
import { FriendBlock, Avatar, UserName } from './style';

export default function FriendItem({ chat, open, id }) {
  const { select } = useContext(ChatContext);
  const history = useHistory();

  const chatHandler = (e) => {
    e.preventDefault();
    open();
    select(e);
  };

  const toChatHandler = () => history.push(`/chat`);

  return (
    <FriendBlock onClick={chatHandler} data-id={id}>
      <Avatar src={chat.user.image} data-id={id} />
      <UserName data-id={id}>{chat.user.name}</UserName>
      <Icon name="chat" onClick={toChatHandler} data-id={id} />
    </FriendBlock>
  );
}
