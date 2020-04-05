import React, { useContext } from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';

import { StyledLink, PreviewBlock, PreviewTitle, Fade, IconWrapper } from '../boards-style';
import { SegmentContext } from '../../../context/segment.context';

export default function BoardsPreviewItem({ item, favourite, id }) {
  const { dispatch } = useStoreon('boards');
  const { blur } = useContext(SegmentContext);

  const addHandler = () => dispatch('boards/toFavourite', id);
  const removeHandler = () => dispatch('boards/removeFavourite', id);
  const actionHandler = () => {
    blur();
    return favourite ? removeHandler() : addHandler();
  };

  const stopAction = (e) => e.preventDefault() && e.stopPropagation();
  return (
    <StyledLink to={item.url} image={item.img}>
      <Fade />
      <PreviewBlock>
        <PreviewTitle>{item.title}</PreviewTitle>
        <IconWrapper favourite={favourite} onClick={stopAction}>
          <Icon name="star outline" onClick={actionHandler} />
        </IconWrapper>
      </PreviewBlock>
    </StyledLink>
  );
}
