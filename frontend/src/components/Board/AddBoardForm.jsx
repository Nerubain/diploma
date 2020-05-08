import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Icon } from 'semantic-ui-react';

import { ColumnInput } from './style';

export default function AddBoardForm({ inputRef, onKeyDown, newColumn, close }) {
  const [value, setValue] = useState('');

  const onChange = ({ target }) => setValue(target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const _id = nanoid();
    close(newColumn({ _id, title: value, tasks: [] }));
  };

  return (
    <form style={{ width: 224 }} onSubmit={onSubmit}>
      <ColumnInput
        ref={inputRef}
        onKeyDown={onKeyDown}
        placeholder="Добавить список"
        onChange={onChange}
        value={value}
      />
      <Button color="green" size="small" type="submit">
        Добависть список
      </Button>
      <Icon name="close" size="large" />
    </form>
  );
}
