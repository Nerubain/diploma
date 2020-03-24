import React from 'react';
import { Icon } from 'semantic-ui-react';

import { StyledLink, PreviewBlock, PreviewTitle, Fade, IconWrapper } from './style';

export default function BoardsPreviewItem({ title, link, img }) {
  return (
    <StyledLink to={link} image={img}>
      <Fade />
      <PreviewBlock>
        <PreviewTitle>{title}</PreviewTitle>
        <IconWrapper>
          <Icon name="star outline" />
        </IconWrapper>
      </PreviewBlock>
    </StyledLink>
  );
}
