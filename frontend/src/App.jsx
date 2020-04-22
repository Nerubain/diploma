import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from '@pages/Auth';
import Boards from '@pages/Boards';
import Errors from '@pages/Error';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path={['/:user/boards', '/team/:team/boards']} component={Boards} />
        <Route component={Errors} exact />
      </Switch>
    </div>
  );
}

export default App;
