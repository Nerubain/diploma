import React, { useState } from 'react';
import { Icon, Button } from 'semantic-ui-react';

import { ListContainer, ListLabelWrapper, ListLabelText, ListWrapper } from '../style';
import BoardsItem from './BoardsItem';

export default function BoardsList({ data }) {
  const [show, setShow] = useState(true);

  const showHandler = () => setShow(!show);

  const display = !!data.list.length;

  const statusIcon = show ? 'minus' : 'plus';

  return (
    <ListContainer>
      <ListLabelWrapper>
        <Icon name={data.icon} size="small" />
        <ListLabelText>{data.label}</ListLabelText>
        <Button icon={statusIcon} size="tiny" onClick={showHandler} />
      </ListLabelWrapper>
      <ListWrapper show={display && show}>
        {data.list.map(({ id, img, title }) => (
          <BoardsItem key={id} image={img} title={title} favourite={data.favourite} />
        ))}
      </ListWrapper>
    </ListContainer>
  );
}
