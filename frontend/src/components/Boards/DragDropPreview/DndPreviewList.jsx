import React from 'react';
import { useStoreon } from 'storeon/react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Icon } from 'semantic-ui-react';

import { ListContainer, BoardListLabel, BoardLabelTitle, ContentContainer } from '../boards-style';
import PreviewItem from './DndPreviewItem';

export default function BoardsPreviewList({ category, list }) {
  const { dispatch } = useStoreon('boards');

  const dragHandler = (result) => dispatch('boards/drag', result);

  return (
    <DragDropContext onDragEnd={dragHandler}>
      <ListContainer>
        <BoardListLabel>
          <Icon name={category.icon} />
          <BoardLabelTitle>{category.label}</BoardLabelTitle>
        </BoardListLabel>
        <Droppable droppableId={category.id} direction="horizontal">
          {(provided) => (
            <ContentContainer {...provided.droppableProps} ref={provided.innerRef}>
              {list.map((item, index) => (
                <PreviewItem key={item.id} id={item.id} item={item.content} index={index} />
              ))}
              {provided.placeholder}
            </ContentContainer>
          )}
        </Droppable>
      </ListContainer>
    </DragDropContext>
  );
}