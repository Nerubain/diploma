import React, { useState } from 'react';

import { TransparentName, TransparentText, Input } from './style';

export default function TransparentInput(props) {
  const { inputRef, containerRef, selectOnChange, select, onKeyDown } = props;
  const [value, setValue] = useState('TOP');
  const width = 35 + 9.3 * value.length;

  const onChange = (e) => setValue(e.target.value);

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
