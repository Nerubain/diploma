import React from 'react';
import { Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Boards from './pages/Boards';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Auth />
      </Route>
      <Route path={['/:user/boards', '/:team/board']}>
        <Boards />
      </Route>
    </div>
  );
}

export default App;
