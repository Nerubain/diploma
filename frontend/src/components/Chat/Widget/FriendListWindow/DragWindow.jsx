import React, { useState, useRef, useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { ChatContext } from '@context/chat.context';
import FriendListSelector from './FriendListSelector';
import SelectedChat from './SelectedChat';
import { DraggableContainer, ChatWrapper, ChatHeader, HeaderIcons, ChatTitle } from './style';

export default function ChatList({ chats, open, close, show }) {
  const [drag, setDrag] = useState(false);
  const { selected, selectedChat } = useContext(ChatContext);
  const history = useHistory();
  const windowRef = useRef(null);

  let shiftX;
  let shiftY;
  const activeCount = chats.length;
  const windowLabel = selected ? selectedChat.user.name : `${activeCount} активных чатов`;

  const initialiseDrag = (event) => {
    shiftX = event.clientX - windowRef.current.getBoundingClientRect().left;
    shiftY = event.clientY - windowRef.current.getBoundingClientRect().top;
    window.addEventListener('mousemove', startDragging, false);
    window.addEventListener('mouseup', stopDragging, false);
    setDrag(true);
  };

  const startDragging = ({ pageX, pageY }) => {
    let newY;
    let newX;
    if (pageY < 0) newY = 0;
    else if (pageY > window.innerHeight - 365) newY = window.innerHeight - 373;
    else newY = pageY - shiftY;

    if (pageX <= 0) newX = 0;
    else if (pageX > window.innerWidth) newX = window.innerWidth - 270;
    else newX = pageX - shiftX;

    windowRef.current.style.left = `${newX}px`;
    windowRef.current.style.top = `${newY}px`;
  };

  const stopDragging = () => {
    window.removeEventListener('mousemove', startDragging, false);
    window.removeEventListener('mouseup', stopDragging, false);
    setDrag(false);
  };

  const toChatHandler = () => history.push(`/chat`);

  return (
    <DraggableContainer drag={drag}>
      <ChatWrapper drag={drag} ref={windowRef}>
        <ChatHeader onMouseDown={initialiseDrag} onMouseUp={null}>
          <ChatTitle>{windowLabel}</ChatTitle>
          <HeaderIcons>
            {!!selected && <Icon name="square outline" onClick={toChatHandler} />}
            <Icon name="close" onClick={close} />
          </HeaderIcons>
        </ChatHeader>
        {show && !selected && <FriendListSelector chats={chats} open={open} />}
        {show && !!selected && <SelectedChat messages={selectedChat} />}
      </ChatWrapper>
    </DraggableContainer>
  );
}
