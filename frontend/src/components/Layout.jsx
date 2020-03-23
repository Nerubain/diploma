import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';

export default function Layout({ children }) {
  return (
    <Sidebar>
      <Container>
        <Navigation />
        {children}
      </Container>
    </Sidebar>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f5f7;
`;
