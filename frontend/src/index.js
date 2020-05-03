import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreContext } from 'storeon/react';
import 'normalize.css';
import { DndProvider } from 'react-dnd';
import back from 'react-dnd-html5-backend';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import store from './store/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <DndProvider backend={back}>
      <Router>
        <App />
      </Router>
    </DndProvider>
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
