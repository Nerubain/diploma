import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from 'semantic-ui-react';

import { NewTaskWrapper, NewTaskInput } from './style';

export default function NewTaskItem(props) {
  const { inputRef, containerRef, onKeyDown, close, newTask, column } = props;
  const [value, setValue] = useState('');
  const onChange = ({ target }) => setValue(target.value);

  const onClickHandler = () => {
    const _id = nanoid();
    const task = { title: value, _id };
    close(newTask({ task, _id: column }));
  };

  return (
    <div ref={containerRef} style={{ paddingTop: 4 }}>
      <NewTaskWrapper>
        <NewTaskInput
          placeholder="Введите заголовок для этой карточки"
          minRows={3}
          maxRows={12}
          inputRef={inputRef}
          onKeyDown={onKeyDown}
          onChange={onChange}
          value={value}
        />
      </NewTaskWrapper>
      <Button color="green" onClick={onClickHandler}>
        Добавить задачу
      </Button>
    </div>
  );
}
