import React, { useContext } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import { SocketContext } from '@context/socket.context';
import Login from '@components/Auth/LoginForm';
import RegistrationForm from '@components/Auth/RegistrationForm';

const Auth = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const { joinBySocket, loginBySocket } = useContext(SocketContext);
  const changeRoute = ({ target }) => history.push(`/${target.name}`);

  return (
    <GlobalWrapper>
      {match.path === '/join' && <RegistrationForm changeRoute={changeRoute} join={joinBySocket} />}
      {match.path === '/login' && <Login changeRoute={changeRoute} login={loginBySocket} />}
    </GlobalWrapper>
  );
};

export default Auth;

const GlobalWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
