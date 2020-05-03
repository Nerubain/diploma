import React from 'react';

import NewTaskItem from './NewTaskItem';
import { ColumnBottom, AddTaskButton } from './style';

export default function Bottom(props) {
  const { select, selectOnChange, inputRef, containerRef, onKeyDown } = props;

  return (
    <ColumnBottom>
      {select && (
        <NewTaskItem inputRef={inputRef} containerRef={containerRef} onKeyDown={onKeyDown} />
      )}
      {!select && <AddTaskButton onClick={selectOnChange}>Добавить карточку</AddTaskButton>}
    </ColumnBottom>
  );
}
