import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';

import boards from './boards';
import user from './user';

export default createStoreon([
  boards,
  user,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
]);
