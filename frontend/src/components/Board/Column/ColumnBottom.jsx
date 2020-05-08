import React from 'react';

import NewTaskItem from './NewTaskItem';
import { ColumnBottom, AddTaskButton } from './style';

export default function Bottom(props) {
  const {
    select,
    selectOnChange,
    inputRef,
    containerRef,
    onKeyDown,
    newTask,
    close,
    column,
  } = props;

  return (
    <ColumnBottom>
      {select && (
        <NewTaskItem
          inputRef={inputRef}
          containerRef={containerRef}
          onKeyDown={onKeyDown}
          newTask={newTask}
          column={column}
          close={close}
        />
      )}
      {!select && <AddTaskButton onClick={selectOnChange}>Добавить карточку</AddTaskButton>}
    </ColumnBottom>
  );
}
