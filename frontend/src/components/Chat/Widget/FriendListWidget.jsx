import React from 'react';
import ReactToolTip from 'react-tooltip';

import FriendBlock from './FriendBlockWidget';
import { FriendListContainer, FriendName } from './style';

export default function FriendListWidget({ list }) {
  return (
    <FriendListContainer>
      {list.map((friend) => (
        <React.Fragment key={`${friend.id}_${friend.name}`}>
          <FriendBlock friend={friend} />
          <ReactToolTip place="right" effect="solid" id={`${friend.id}_${friend.name}`}>
            <FriendName>{friend.name}</FriendName>
          </ReactToolTip>
        </React.Fragment>
      ))}
    </FriendListContainer>
  );
}
