import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';

import boards from './boards';
import user from './user';
import chatWidget from './widgets/chat';

export default createStoreon([
  boards,
  user,
  chatWidget,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
]);
