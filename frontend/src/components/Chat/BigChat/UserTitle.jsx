import React from 'react';

import { UserTitleWrapper, UserTitleName, UserLastSeen, ChatInfo, ChatButtons } from './style';

export default function UserTitle() {
  return (
    <UserTitleWrapper>
      <ChatInfo>
        <UserTitleName>Nerubain</UserTitleName>
        <UserLastSeen>Never</UserLastSeen>
        <ChatButtons />
      </ChatInfo>
    </UserTitleWrapper>
  );
}
