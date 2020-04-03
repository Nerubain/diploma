import React, { useContext } from 'react';

import BoadardsSegment from './Boards/BoardsSegment';
import MenuSegment from './MenuSegment/MenuSegment';

import { SegmnetWrapper } from './style';
import { SegmentContext } from '../../context/segment.context';

export default function Segments() {
  const { ref, segment, blur } = useContext(SegmentContext);

  return (
    <SegmnetWrapper ref={ref} show={segment} onClick={blur}>
      <BoadardsSegment />
      <MenuSegment name="add" />
      <MenuSegment name="user" />
    </SegmnetWrapper>
  );
}
