import React from 'react';

import TransparentButton from './TransparentButton';
import AddBoardForm from './AddBoardForm';
import { ColumnContainer } from './style';

export default function AddColumnButton(props) {
  const { select, inputRef, selectOnChange, onKeyDown, containerRef } = props;

  return (
    <ColumnContainer select={select} ref={containerRef}>
      {!select && (
        <TransparentButton
          label="Добавить ещё одну колонку"
          icon="plus"
          style={{ margin: 0 }}
          onClick={selectOnChange}
        />
      )}
      {select && <AddBoardForm inputRef={inputRef} onKeyDown={onKeyDown} />}
    </ColumnContainer>
  );
}
