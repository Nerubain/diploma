import React from 'react';

import {
  FriendBlock,
  Avatar,
  UserDataBlock,
  UserDataHeader,
  UserName,
  LastTime,
  LastMessage,
} from './style';

export default function FriendItem({ index, user, onClick, selected, id }) {
  return (
    <FriendBlock selected={id === selected} onClick={onClick} data-id={id}>
      <Avatar data-id={id}>
        <img src={user.avatar} alt="lol" />
      </Avatar>
      <UserDataBlock data-id={id}>
        <UserDataHeader data-id={id}>
          <UserName selected={id === selected} data-id={id}>
            {user.name}
          </UserName>
          <LastTime selected={id === selected} data-id={id}>
            12:00
          </LastTime>
        </UserDataHeader>
        <LastMessage selected={id === selected} data-id={id}>
          asdsad
        </LastMessage>
      </UserDataBlock>
    </FriendBlock>
  );
}
