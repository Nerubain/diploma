export default (store) => {
  store.on('@init', () => ({ chat: { showFriends: { show: false, id: null } } }));

  store.on('chat_widget/show-friends', ({ chat }, { show = false, id = null }) => {
    return { chat: { ...chat, showFriends: { show, id } } };
  });
};
