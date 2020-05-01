import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { ChatContext } from '@context/chat.context';
import {
  UserTitleWrapper,
  UserTitleName,
  UserLastSeen,
  ChatInfo,
  ChatButtons,
  Avatar,
} from './style';

export default function UserTitle({ user }) {
  const { select } = useContext(ChatContext);
  return (
    <UserTitleWrapper>
      <Icon
        name="arrow left"
        size="large"
        style={{ marginRight: 5, cursor: 'pointer' }}
        onClick={select}
      />
      <Avatar>
        <img src={user.image} alt={user.name} />
      </Avatar>
      <ChatInfo>
        <UserTitleName>{user.name}</UserTitleName>
        <UserLastSeen>Never</UserLastSeen>
        <ChatButtons />
      </ChatInfo>
    </UserTitleWrapper>
  );
}
