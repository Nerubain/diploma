import React from 'react';
import ReactToolTip from 'react-tooltip';

import FriendBlock from './FriendBlock';
import { FriendListContainer, FriendName } from './style';

export default function FriendList({ list }) {
  return (
    <FriendListContainer>
      {list.map((friend) => (
        <>
          <FriendBlock friend={friend} key={`${friend.id}_${friend.name}`} />
          <ReactToolTip place="right" effect="solid" id={`${friend.id}_${friend.name}`}>
            <FriendName>{friend.name}</FriendName>
          </ReactToolTip>
        </>
      ))}
    </FriendListContainer>
  );
}
