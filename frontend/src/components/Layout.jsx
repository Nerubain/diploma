import React from 'react';
import styled from 'styled-components';

import { SegmentProvider } from '@context/segment.context';
import { ModalProvider } from '@context/modal.context';
import Navigation from './Navigation/Navigation';
import Segments from './Segment/Segments';
import Modals from './Modals/Modals';

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
        {/* <MobileBottom /> */}
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

const MobileBottom = styled.div`
  width: 100%;
  height: 50px;
  display: none;
  box-shadow: 0 -2px 6px 2px rgba(0, 0, 0, 0.06);
  background: white;
  z-index: 9999;

  @media (max-width: 600px) {
    display: flex;
  }
`;
