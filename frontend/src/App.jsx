import React from 'react';
import { Route } from 'react-router-dom';

import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Auth />
      </Route>
    </div>
  );
}

export default App;
