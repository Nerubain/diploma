import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from './pages/Auth';
import Boards from './pages/Boards';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path={['/:user/boards', '/:team/board']} component={Boards} />
        <Route>
          <h1>ERROR</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
