import React from 'react';
import styled from 'styled-components';

import Login from '@components/Auth/LoginForm';

const Auth = () => (
  <GlobalWrapper>
    <Login />
  </GlobalWrapper>
);

export default Auth;

const GlobalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #70706e;
`;
