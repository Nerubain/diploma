import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  FriendBlock,
  Avatar,
  UserDataBlock,
  UserDataHeader,
  UserName,
  LastTime,
  LastMessage,
} from './style';

export default function FriendItem({ user, selected, id, onClick }) {
  return (
    <FriendBlock selected={id === selected} data-id={id} onClick={onClick}>
      <Avatar data-id={id}>
        <img src={user.image} alt="lol" />
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
