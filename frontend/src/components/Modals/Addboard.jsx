import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Modal, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

const teams = [
  { key: 't', text: 'Команды', value: true },
  { key: 'n', text: 'Без команды', value: false },
];

export default function Addboard({ modal, close }) {
  const [newBoard, setBoard] = useState({ name: '', team: '', type: true });
  const isOpen = modal === 'create_board';
  const input = useRef(null);
  const closeHandler = useCallback(() => close(), [close]);

  const setType = (e, { value }) => setBoard((prev) => ({ ...prev, type: value }));
  const setName = ({ target }) => setBoard((prev) => ({ ...prev, name: target.value }));
  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, [input, isOpen]);
  return (
    <Modal
      open={isOpen}
      onClose={closeHandler}
      centered={false}
      basic
      closeIcon
      size="mini"
      as={StyledModal}
    >
      <Modal.Content as={ModalContent}>
        <Modal.Description>
          <ModalForm>
            <ModalInput
              placeholder="Добавить заголовок доски"
              ref={input}
              type="text"
              value={newBoard.name}
              onChange={setName}
            />
            <Dropdown options={teams} defaultValue compact onChange={setType} />
          </ModalForm>
        </Modal.Description>
      </Modal.Content>
      asdsajdisajidjlksjdijsidalsjd
    </Modal>
  );
}

const StyledModal = styled.div`
  & > i {
    padding-top: 0 !important;
    width: max-content !important;
    height: max-content !important;
  }
`;
const ModalContent = styled.div`
  padding: 10px 10px 10px 16px !important;
  background-color: green !important;
`;

const ModalInput = styled.input`
  width: calc(100% - 65px);
  border: none;
  padding: 2px 8px 2px 8px;
  margin-left: -8px;
  line-height: 24px;
  font-size: 16px;
  color: white;
  background: transparent !important;
  border-radius: 3px;
  &::placeholder {
    color: hsla(0, 0%, 100%, 0.6);
  }
  &:hover,
  &:focus {
    background: hsla(0, 0%, 100%, 0.15) !important;
  }
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;
