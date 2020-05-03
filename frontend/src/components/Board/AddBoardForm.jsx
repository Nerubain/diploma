import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import { ColumnInput } from './style';

export default function AddBoardForm({ inputRef, onKeyDown }) {
  return (
    <form style={{ width: 224 }}>
      <ColumnInput ref={inputRef} onKeyDown={onKeyDown} placeholder="Добавить список" />
      <Button color="green" size="small" type="submit">
        Добависть список
      </Button>
      <Icon name="close" size="large" />
    </form>
  );
}
