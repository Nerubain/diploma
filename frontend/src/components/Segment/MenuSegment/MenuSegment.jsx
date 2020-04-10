import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import {
  ContainerSegment,
  ContextSegment,
  SegmentHeader,
  SegmentTitle,
  SegmentMenu,
  CloseButton,
} from '../style';
import { SegmentContext } from '../../../context/segment.context';

export default function Segment({ children, name, label, customRef }) {
  const { segment, close } = useContext(SegmentContext);

  return (
    <ContextSegment style={{ right: 3 }} show={segment.type === name} ref={customRef}>
      <ContainerSegment>
        <SegmentMenu>
          <SegmentHeader>
            <SegmentTitle>{label}</SegmentTitle>
            <CloseButton onClick={close}>
              <Icon name="close" />
            </CloseButton>
          </SegmentHeader>
          {children}
        </SegmentMenu>
      </ContainerSegment>
    </ContextSegment>
  );
}
