import React, { useState } from 'react';
import styled from 'styled-components';

import { SidebarProvider } from '../context/sidebar.context';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';
import BoardsSegment from './Segment/Boards/BoardsSegment';

export default function Layout({ children }) {
  const [segment, setSegment] = useState({ boards: false, user: false });

  const segmentHandler = (name) => setSegment({ ...segment, [name]: !segment[name] });
  console.log(segment);
  return (
    <SidebarProvider>
      <Sidebar>
        <Container>
          <BoardsSegment segment={segment.boards} segmentHandler={segmentHandler} />
          <Navigation segmentHandler={segmentHandler} />
          {children}
        </Container>
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
