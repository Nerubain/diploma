import React from 'react';
import { Icon } from 'semantic-ui-react';

import { ShowChatsButton, ButtonRow, FriendsCount } from './style';

export default function ActionButton({ onlineCount, open, select }) {
  const openHandler = () => {
    select();
    open();
  };
  return (
    <ShowChatsButton onClick={openHandler}>
      <ButtonRow>
        <FriendsCount>{`${onlineCount}`}</FriendsCount>
        <Icon name="user" />
      </ButtonRow>
    </ShowChatsButton>
  );
}
