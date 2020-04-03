import React from 'react';
import styled from 'styled-components';

import { SidebarProvider } from '../context/sidebar.context';
import { SegmentProvider } from '../context/segment.context';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';
import Segments from './Segment/Segments';

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SegmentProvider>
          <Container>
            <Segments />
            <Navigation />
            {children}
          </Container>
        </SegmentProvider>
      </Sidebar>
    </SidebarProvider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;
`;
