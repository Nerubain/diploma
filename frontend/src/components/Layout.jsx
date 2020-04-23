import React from 'react';
import styled from 'styled-components';

import { SegmentProvider } from '@context/segment.context';
import { ModalProvider } from '@context/modal.context';
import Navigation from './Navigation/Navigation';
import Segments from './Segment/Segments';
import Modals from './Modals/Modals';
import ChatWidget from './Chat/Widget/Widget';

export default function Layout({ children }) {
  return (
    <Container>
      <ModalProvider>
        <SegmentProvider>
          <Modals />
          <Segments />
          <Navigation />
        </SegmentProvider>
        {children}
        <ChatWidget />
      </ModalProvider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fafbfc;
`;
