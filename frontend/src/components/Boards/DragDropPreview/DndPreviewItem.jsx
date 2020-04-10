import React from 'react';
import { useStoreon } from 'storeon/react';
import { Icon } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';

import { StyledLink, PreviewBlock, PreviewTitle, Fade, IconWrapper } from '../boards-style';

export default function BoardsPreviewItem({ item, id, index, dragItem }) {
  const { dispatch } = useStoreon('boards');
  // console.log(id, dragItem);
  const removeHandler = () => dispatch('boards/removeFavourite', id);
  const margin = dragItem ? '0 2% 2% 0' : '0 0 2% 0';
  // console.log(margin);
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
          margin={margin}
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
