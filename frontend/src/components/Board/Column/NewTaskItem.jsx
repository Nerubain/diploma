import React from 'react';
import { Button } from 'semantic-ui-react';

import { NewTaskWrapper, NewTaskInput } from './style';

export default function NewTaskItem(props) {
  const { inputRef, containerRef, onKeyDown } = props;

  return (
    <div ref={containerRef} style={{ paddingTop: 4 }}>
      <NewTaskWrapper>
        <NewTaskInput
          placeholder="Введите заголовок для этой карточки"
          minRows={3}
          maxRows={12}
          inputRef={inputRef}
          onKeyDown={onKeyDown}
        />
      </NewTaskWrapper>
      <Button color="green">Добавить задачу</Button>
    </div>
  );
}
