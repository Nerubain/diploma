import initialdata from './initialdata';

export default (store) => {
  store.on('@init', () => ({ user: initialdata }));
};
