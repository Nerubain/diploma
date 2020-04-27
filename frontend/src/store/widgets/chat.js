export default (store) => {
  store.on('@init', () => ({ chat: { selectedChat: { show: false, user: null }, messages: {} } }));

  store.on('chat_widget/show-friends', ({ chat }, { show = false, user = null }) => {
    return { chat: { ...chat, selectedChat: { show, user } } };
  });
  store.on('chat/new_message', ({ chat }, message) => {
    console.log(message);
    const newList = chat.messages[message.to.id] || [];
    const newMessages = {
      ...chat.messages,
      [message.to.id]: [...newList, message],
    };
    return { chat: { ...chat, messages: newMessages } };
  });
};
