import React, { useState } from 'react';
import { Icon, Button } from 'semantic-ui-react';

import { ListContainer, ListLabelWrapper, ListLabelText, ListWrapper } from '../../style';
import BoardsItem from './BoardsItem';

export default function BoardsList({ column, list }) {
  const [show, setShow] = useState(true);

  const showHandler = () => setShow(!show);

  const display = !!column.boardIds.length;

  const statusIcon = show ? 'minus' : 'plus';

  return (
    <ListContainer>
      <ListLabelWrapper>
        <Icon name={column.icon} size="small" />
        <ListLabelText>{column.label}</ListLabelText>
        <Button icon={statusIcon} size="tiny" onClick={showHandler} />
      </ListLabelWrapper>
      <ListWrapper show={display && show}>
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
