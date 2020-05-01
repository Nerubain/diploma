import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from '@pages/Auth';
import Boards from '@pages/Boards';
import Chat from '@pages/Chat';
import Errors from '@pages/Error';
import ChatWidget from '@components/Chat/Widget/Widget';
import { ChatProvider } from '@context/chat.context';
import { chats, messages } from '@utils/objects/chats';

function App() {
  return (
    <ChatProvider chats={chats} messages={messages}>
      <div className="App" style={{ width: '100%', height: '100vh', position: 'absolute' }}>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path={['/:user/boards', '/team/:team/boards']} component={Boards} />
          <Route path={['/chat']} component={Chat} />
          <Route component={Errors} exact />
        </Switch>
        <Route path={['/:user/boards', '/team/:team/boards']} component={ChatWidget} />
      </div>
    </ChatProvider>
  );
}

export default App;
