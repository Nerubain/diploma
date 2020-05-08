/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { ColumnHeader, ColumnTextArea, DragHook } from './style';

export default function ColumnHead(props) {
  const {
    inputRef,
    selectOnChange,
    onKeyDown,
    containerRef,
    select,
    title,
    handler,
    updateColumn,
    column,
  } = props;
  const [value, setValue] = useState(title);

  const onChange = ({ target }) => {
    setValue(target.value);
    updateColumn({ title: target.value, _id: column });
  };
  return (
    <div style={{ position: 'relative' }} ref={containerRef}>
      <DragHook {...handler} onClick={selectOnChange} show={select} />
      <ColumnHeader>
        <ColumnTextArea
          maxRows={12}
          value={value}
          inputRef={inputRef}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </ColumnHeader>
    </div>
  );
}
