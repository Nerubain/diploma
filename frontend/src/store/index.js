import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';

import { boards } from './boards/index';

export default createStoreon([boards, process.env.NODE_ENV !== 'production' && storeonDevtools]);
