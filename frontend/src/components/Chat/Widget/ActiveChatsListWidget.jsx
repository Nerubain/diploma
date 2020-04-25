import React from 'react';
import ReactToolTip from 'react-tooltip';

import ActiveChatBlockWidget from './ActiveChatBlockWidget';
import { ActiveChatsListContainer, FriendName } from './style';

export default function ActiveChatsListWidget({ list }) {
  return (
    <ActiveChatsListContainer>
      {list.map((chat) => (
        <React.Fragment key={`${chat.id}_${chat.name}`}>
          <ActiveChatBlockWidget friend={chat} />
          <ReactToolTip place="right" effect="solid" id={`${chat.id}_${chat.name}`}>
            <FriendName>{chat.name}</FriendName>
          </ReactToolTip>
        </React.Fragment>
      ))}
    </ActiveChatsListContainer>
  );
}
