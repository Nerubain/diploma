import React, { useContext, useCallback } from 'react';
import { useStoreon } from 'storeon/react';

import BoadardsSegment from './Boards/BoardsSegment';
import MenuSegment from './MenuSegment/MenuSegment';
import AddSegment from './MenuSegment/AddSegment';
import { SegmentContext } from '../../context/segment.context';

export default function Segments() {
  const { user } = useStoreon('user');
  const { addRef, userMenuRef } = useContext(SegmentContext);

  return (
    <>
      <BoadardsSegment />
      <MenuSegment name="add" label="Создать" customRef={addRef}>
        <AddSegment />
      </MenuSegment>
      <MenuSegment name="user" label={user.name} customRef={userMenuRef} />
    </>
  );
}
