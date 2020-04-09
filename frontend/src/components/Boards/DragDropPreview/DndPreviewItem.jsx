import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';

import { StyledLink, PreviewBlock, PreviewTitle, Fade, IconWrapper } from '../boards-style';

export default function BoardsPreviewItem({ item, id, index }) {
  const { dispatch } = useStoreon('boards');

  const removeHandler = () => dispatch('boards/removeFavourite', id);

  const stopAction = (e) => e.preventDefault() && e.stopPropagation();
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <StyledLink
          to={item.url}
          image={item.img}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Fade />
          <PreviewBlock>
            <PreviewTitle>{item.title}</PreviewTitle>
            <IconWrapper favourite onClick={stopAction}>
              <Icon name="star outline" onClick={removeHandler} />
            </IconWrapper>
          </PreviewBlock>
        </StyledLink>
      )}
    </Draggable>
  );
}
