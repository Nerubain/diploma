/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useState, useCallback, useEffect, useContext } from 'react';

import preloadImages from '@utils/functions/preloadImages';
import { ChatContext } from '@context/chat.context';
import ActiveChatsListWidget from './ActiveChatsListWidget';
import DragWindow from './FriendListWindow/DragWindow';
import ActionButton from './ActionButton';
import { WidgetContainer } from './style';

export default function Widget() {
  const { filteredList, select, chats } = useContext(ChatContext);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  const preloadData = useCallback(async () => {
    setLoading(true);
    try {
      await Promise.all(filteredList.map(preloadImages));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    preloadData();
  }, [preloadData]);

  if (loading) return null;
  return (
    <>
      <WidgetContainer>
        <ActiveChatsListWidget chats={chats} open={open} />
        <ActionButton onlineCount={chats.length} open={open} select={select} />
      </WidgetContainer>
      {show && <DragWindow chats={filteredList} open={open} close={close} show={show} />}
    </>
  );
}
