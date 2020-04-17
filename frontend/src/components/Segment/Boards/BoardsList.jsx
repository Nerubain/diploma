import React from 'react';
import { Icon, Button } from 'semantic-ui-react';

import {
  ListContainer,
  ListLabelWrapper,
  ListLabelText,
  ListWrapper,
  ListLabelLink,
} from '../style';
import BoardsItem from './BoardsItem';
import BoardItemWrapper from '../../Dnd/BoardItemWrapper';
import EmptyList from './EmptyList';

export default function BoardsList({ category, boards, add, remove, status }) {
  const showHandler = () => (status ? remove(category.id) : add(category.id));
  const display = !!category.boardsIds.length;

  const statusIcon = status ? 'minus' : 'plus';

  return (
    <ListContainer>
      <ListLabelWrapper>
        <Icon name={category.icon} size="small" />
        {category.url ? (
          <ListLabelLink to={category.url}>{category.label} </ListLabelLink>
        ) : (
          <ListLabelText>{category.label}</ListLabelText>
        )}

        <Button icon={statusIcon} size="tiny" onClick={showHandler} />
      </ListLabelWrapper>
      <ListWrapper show={status}>
        {display ? (
          boards.map((board, index) =>
            category.favourite ? (
              <BoardItemWrapper key={board.id} index={index} id={board.id} type="segment">
                <BoardsItem
                  board={board.id}
                  content={board.content}
                  favourite={board.favourite}
                  dragStatus={category.favourite}
                />
              </BoardItemWrapper>
            ) : (
              <BoardsItem
                key={board.id}
                board={board.id}
                content={board.content}
                favourite={board.favourite}
                dragStatus={category.favourite}
              />
            )
          )
        ) : (
          <EmptyList />
        )}
      </ListWrapper>
    </ListContainer>
  );
}
