/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { ColumnHeader, ColumnTextArea, DragHook } from './style';

export default function ColumnHead(props) {
  const { inputRef, selectOnChange, containerRef, select, title, handler } = props;
  const [value, setValue] = useState(title);

  const onChange = ({ target }) => setValue(target.value);
  return (
    <div style={{ position: 'relative' }} ref={containerRef}>
      <DragHook {...handler} onClick={selectOnChange} show={select} />
      <ColumnHeader>
        <ColumnTextArea maxRows={12} value={value} inputRef={inputRef} onChange={onChange} />
      </ColumnHeader>
    </div>
  );
}
