import React, { useState, useEffect } from 'react';

import { TransparentName, TransparentText, Input } from './style';

export default function TransparentInput(props) {
  const { inputRef, containerRef, selectOnChange, select, onKeyDown, boardName, update } = props;
  const [value, setValue] = useState(boardName);
  const width = 35 + 9.3 * value.length;

  const onChange = (e) => {
    setValue(e.target.value);
    update(e.target.value);
  };

  useEffect(() => {
    setValue(boardName);
  }, [boardName]);
  return (
    <TransparentName ref={containerRef}>
      <TransparentText show={select} onClick={selectOnChange}>
        {value}
      </TransparentText>
      <Input
        width={width}
        ref={inputRef}
        value={value}
        onChange={onChange}
        show={select}
        onClick={selectOnChange}
        onKeyDown={onKeyDown}
      />
    </TransparentName>
  );
}
