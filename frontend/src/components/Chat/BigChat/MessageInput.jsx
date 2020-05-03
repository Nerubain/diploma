import React, { useRef } from 'react';

import { Icon } from 'semantic-ui-react';
import { InputContainer, Input, IconWrapper } from './style';

export default function MessageInput({ onChange, value, onHeightChange }) {
  const input = useRef(null);

  return (
    <InputContainer>
      <Input
        onChange={onChange}
        value={value}
        ref={input}
        minRows={1}
        maxRows={12}
        useCacheForDOMMeasurements
        onHeightChange={onHeightChange}
        placeholder="Введите сообщение"
      />
      <IconWrapper>
        <Icon name="send" />
      </IconWrapper>
    </InputContainer>
  );
}
