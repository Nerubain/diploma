import React, { useState, useRef, useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import { Picker } from 'emoji-mart';
import { Input, Icon, Button } from 'semantic-ui-react';
import styled from 'styled-components';

export default function EmojiPicker({ style, to, add }) {
  const [message, setMessage] = useState('');
  const { dispatch, user } = useStoreon('user');
  const ref = useRef(null);

  const onChange = (e) => setMessage(e.target.value);
  const selectEmoji = (emoji) => setMessage(message + emoji.native);

  const onSubmit = (e) => {
    e.preventDefault();
    add({ message, author: user.name, id: message });
    // dispatch('chat/new_message', { to, text: message, from: user });
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
      <Send icon="send" as={Button} type="submit" />
      <Picker
        native
        autoFocus
        emojiSize={16}
        showPreview={false}
        showSkinTones={false}
        style={style}
        perLine={7}
        onClick={selectEmoji}
      />
      <EmojiInput fluid>
        <Smile name="smile outline" />
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
    padding-right: 3.8em !important;
    border-bottom: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
  }
  & .emoji-mart {
    transform: scale(0);
    transition: all 0.2s;
    transform-origin: 100% 100%;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.4);
  }
  & .emoji-mart:hover {
    transform: scale(1);
  }
  & .emoji-mart::after {
    content: '';
    display: block;
    position: absolute;
    width: calc(100% + 10px);
    height: calc(100% + 15px);
    background: transparent;
    top: 0;
    z-index: -1;
  }
  & .emoji-mart-scroll {
    height: 165px;
  }
`;

const Smile = styled(Icon)`
  position: absolute !important;
  right: 0 !important;
  display: flex !important;
  justify-content: center !important;
  height: 34px !important;
  align-items: center !important;
  width: 20px !important;

  padding: 0;
`;
const Send = styled(Button)`
  position: absolute !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0 !important;
  width: 16px !important;
  height: 34px !important;
  z-index: 2 !important;
  right: 29px !important;
  background-color: transparent !important;
  padding: 0 !important;
`;
