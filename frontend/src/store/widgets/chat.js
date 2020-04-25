export default (store) => {
  store.on('@init', () => ({ chat: { selectedChat: { show: false, id: null }, messages: {} } }));

  store.on('chat_widget/show-friends', ({ chat }, { show = false, id = null }) => {
    return { chat: { ...chat, selectedChat: { show, id } } };
  });
};
