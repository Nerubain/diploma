export default (store) => {
  store.on('@init', () => ({ chat: { showFriends: false } }));

  store.on('chat_widget/show-friends', ({ chat }, show) => {
    return { chat: { ...chat, showFriends: show } };
  });
};
