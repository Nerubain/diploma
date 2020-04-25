import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';
import { persistState } from '@storeon/localstorage';

import boards from './boards';
import user from './user';
import chatWidget from './widgets/chat';
import segment from './segment/segment';

export default createStoreon([
  boards,
  user,
  chatWidget,
  segment,
  persistState(['openMenus']),
  process.env.NODE_ENV !== 'production' && storeonDevtools,
]);
