import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { SegmentContext } from '@context/segment.context';
import {
  ContainerSegment,
  ContextSegment,
  SegmentHeader,
  SegmentTitle,
  SegmentMenu,
  CloseButton,
} from '../style';

export default function Segment({ children, name, label, customRef }) {
  const { close } = useContext(SegmentContext);

  return (
    <ContextSegment style={{ right: 3 }} ref={customRef}>
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
