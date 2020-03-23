import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation/Navigation';

export default function Layout({ children }) {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f5f7;
`;
