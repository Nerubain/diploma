import React, { useContext } from 'react';

import { ContainerSegment, ContextSegment, ContextContainer } from '../style';
import { SegmentContext } from '../../../context/segment.context';

export default function Segment({ position, name }) {
  const { stopPropagation, segment } = useContext(SegmentContext);
  return (
    <ContextSegment
      onClick={stopPropagation}
      style={{ width: position, right: 3 }}
      show={name === segment}
    >
      <ContainerSegment>
        <ContextContainer onClick={stopPropagation}>{name}</ContextContainer>
      </ContainerSegment>
    </ContextSegment>
  );
}
