export default (store) => {
  store.on('@init', () => ({ openMenus: [] }));

  store.on('segment/open', ({ openMenus }, menu) => ({ openMenus: [...openMenus, menu] }));
  store.on('segment/close', ({ openMenus }, menu) => ({
    openMenus: openMenus.filter((m) => m !== menu),
  }));
};
