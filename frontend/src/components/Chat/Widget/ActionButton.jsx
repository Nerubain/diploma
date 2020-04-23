import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';

import { ShowChatsButton, ButtonRow, FriendsCount } from './style';

export default function ActionButton({ onlineCount }) {
  const { dispatch } = useStoreon();

  const widgetHandler = () => dispatch('chat_widget/show-friends', { show: true });

  return (
    <ShowChatsButton onClick={widgetHandler}>
      <ButtonRow>
        <FriendsCount>{`${onlineCount}`}</FriendsCount>
        <Icon name="user" />
      </ButtonRow>
    </ShowChatsButton>
  );
}
