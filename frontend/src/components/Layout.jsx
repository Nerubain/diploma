import React from 'react';
import styled from 'styled-components';

import { SegmentProvider } from '@context/segment.context';
import { ModalProvider } from '@context/modal.context';
import Navigation from './Navigation/Navigation';
import Segments from './Segment/Segments';
import Modals from './Modals/Modals';

export default function Layout({ children, isborder, background, color }) {
  return (
    <Container isborder={isborder} background={background} color={color}>
      <ModalProvider>
        <SegmentProvider>
          <Modals />
          <Segments />
          <Navigation isborder={isborder} />
        </SegmentProvider>
        {children}
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
  background: ${({ isborder, background }) =>
    isborder && background ? `url(${background.fullImage}.jpg)` : '#fafbfc'};
  background-color: ${({ isborder, color }) => (isborder && color ? color : '#fafbfc')};
  background-size: cover;
  background-position: 50%;
`;
