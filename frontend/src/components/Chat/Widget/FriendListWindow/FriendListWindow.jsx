import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Icon } from 'semantic-ui-react';
import { useStoreon } from 'storeon/react';

import FriendListSelector from './FriendListSelector';
import SelectedChat from './SelectedChat';
import { DraggableContainer, ChatWrapper, ChatHeader, HeaderIcons, ChatTitle } from './style';

export default function ChatList({ list }) {
  const { dispatch, chat } = useStoreon('chat');
  const [drag, setDrag] = useState(false);

  const windowRef = useRef(null);

  let shiftX;
  let shiftY;
  const activeCount = list.length;

  const widgetHandler = useCallback(() => dispatch('chat_widget/show-friends', { show: false }), [
    dispatch,
  ]);

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
    else if (pageY > window.innerHeight - 370) newY = window.innerHeight - 370;
    else newY = pageY - shiftY;

    if (pageX <= 0) newX = 0;
    else if (pageX > window.innerWidth - 270) newX = window.innerWidth - 270;
    else newX = pageX - shiftX;

    windowRef.current.style.left = `${newX}px`;
    windowRef.current.style.top = `${newY}px`;
  };

  const stopDragging = () => {
    window.removeEventListener('mousemove', startDragging, false);
    window.removeEventListener('mouseup', stopDragging, false);
    setDrag(false);
  };

  useEffect(() => {
    if (windowRef.current) {
      windowRef.current.style.left = `${80}px`;
      windowRef.current.style.top = `${310}px`;
    }
  }, []);

  return (
    <DraggableContainer drag={drag}>
      <ChatWrapper drag={drag} ref={windowRef}>
        <ChatHeader onMouseDown={initialiseDrag} onMouseUp={null}>
          <ChatTitle>{activeCount} активных чатов</ChatTitle>
          <HeaderIcons>
            <Icon name="close" onClick={widgetHandler} />
          </HeaderIcons>
        </ChatHeader>
        {!chat.showFriends.id && <FriendListSelector list={list} />}
        {!!chat.showFriends.id && <SelectedChat id={chat.showFriends.id} />}
      </ChatWrapper>
    </DraggableContainer>
  );
}
