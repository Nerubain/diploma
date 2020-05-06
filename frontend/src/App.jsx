import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Auth from '@pages/Auth';
import Boards from '@pages/Boards';
import Chat from '@pages/Chat';
import Errors from '@pages/Error';
import Board from '@pages/Board';
import ChatWidget from '@components/Chat/Widget/Widget';
import { SocketProvider } from '@context/socket.context';
import { ChatProvider } from '@context/chat.context';
import { chats, messages } from '@utils/objects/chats';
import { useStoreon } from 'storeon/react';

function App() {
  const { user } = useStoreon('user');
  return (
    <SocketProvider>
      <ChatProvider chats={chats} messages={messages}>
        <div className="App" style={{ width: '100%', height: '100vh', position: 'absolute' }}>
          <Switch>
            <Route exact path={['/join', '/login']} component={Auth} />
            {!user && <Redirect to="/login" />}
            <Route path={['/:user/boards', '/team/:team/boards']} component={Boards} />
            <Route path="/board/:boardId" component={Board} />
            <Route path={['/chat']} component={Chat} />
            <Route component={Errors} exact />
          </Switch>
          <Route path={['/:user/boards', '/team/:team/boards']} component={ChatWidget} />
        </div>
      </ChatProvider>
    </SocketProvider>
  );
}

export default App;
