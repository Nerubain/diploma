import React, { useState, useRef, useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import { Input, Button } from 'semantic-ui-react';
import styled from 'styled-components';

export default function EmojiPicker({ style, to, add }) {
  const [message, setMessage] = useState('');
  const { user } = useStoreon('user');
  const ref = useRef(null);

  const onChange = (e) => setMessage(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    add({ message, author: user.name, id: message });
    setMessage('');
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [user]);

  return (
    <InputContainer className="container" onSubmit={onSubmit}>
      <Action />

      <EmojiInput fluid>
        <Send icon="send" as={Button} type="submit" />
        <input onChange={onChange} value={message} ref={ref} placeholder="Введите сообщение" />
      </EmojiInput>
    </InputContainer>
  );
}

const Action = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 34px;
  height: 34px;
  background-color: transparent;
  z-index: 2;

  &:hover ~ .emoji-mart {
    visibility: visible;
    transform: scale(1);
  }
`;

const EmojiInput = styled(Input)`
  border-top: 0 !important;
  & > i {
    pointer-events: initial !important;
    cursor: pointer !important;
  }
`;

const InputContainer = styled.form`
  width: 100%;
  & > .input > input {
    padding-right: 2.5em !important;
    border-bottom: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
  }
`;

const Send = styled(Button)`
  position: absolute !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0 !important;
  width: 30px !important;
  height: 34px !important;
  z-index: 2 !important;
  right: 0px !important;
  background-color: transparent !important;
  padding: 0 !important;
`;
