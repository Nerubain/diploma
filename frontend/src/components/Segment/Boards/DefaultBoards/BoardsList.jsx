import React from 'react';
import { Icon, Button } from 'semantic-ui-react';

import {
  ListContainer,
  ListLabelWrapper,
  ListLabelText,
  ListWrapper,
  ListLabelLink,
} from '../../style';
import BoardsItem from './BoardsItem';

export default function BoardsList({ column, list, add, remove, status }) {
  const showHandler = () => (status ? remove(column.id) : add(column.id));

  const display = !!column.boardIds.length;

  const statusIcon = status ? 'minus' : 'plus';

  return (
    <ListContainer>
      <ListLabelWrapper>
        <Icon name={column.icon} size="small" />
        {column.url ? (
          <ListLabelLink to={column.url}>{column.label} </ListLabelLink>
        ) : (
          <ListLabelText>{column.label}</ListLabelText>
        )}

        <Button icon={statusIcon} size="tiny" onClick={showHandler} />
      </ListLabelWrapper>
      <ListWrapper show={display && status}>
        {list.map((board) => (
          <BoardsItem
            key={board.id}
            board={board.id}
            content={board.content}
            favourite={board.favourite}
          />
        ))}
      </ListWrapper>
    </ListContainer>
  );
}
