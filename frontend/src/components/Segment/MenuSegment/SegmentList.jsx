import React from 'react';
import { Icon } from 'semantic-ui-react';

import {
  SegmentMenuList,
  SegmentListItem,
  SegmentItemIcon,
  SegmentItemTitle,
  SegmentItemHeader,
  SegmentItemDescription,
} from '../style';

export default function AddSegment({ menu, handler }) {
  return (
    <SegmentMenuList>
      {menu.map(({ label, icon, text, handlerParams }) => (
        <SegmentListItem onClick={() => handler(...handlerParams)} key={`${label}+${text}`}>
          <SegmentItemHeader>
            <SegmentItemIcon>
              <Icon name={icon} />
            </SegmentItemIcon>
            <SegmentItemTitle>{label}</SegmentItemTitle>
          </SegmentItemHeader>
          <SegmentItemDescription>{text}</SegmentItemDescription>
        </SegmentListItem>
      ))}
    </SegmentMenuList>
  );
}
