import React, { useState, useCallback, useRef, useEffect, useContext } from 'react';
import { Modal, Dropdown } from 'semantic-ui-react';

import { AddBoardContext } from '../../../context/addmodal.context';
import BackgroundPicker from './BackgroundPicker';
import { StyledDropDown, StyledModal, ModalContent, ModalForm, ModalInput } from './style';

export default function Addboard({ isOpen, close }) {
  const { newBoardHandler, newBoard, teamHandler, teamList, createBoard, clear } = useContext(
    AddBoardContext
  );
  const [showAddition, setAdditional] = useState(false);

  const input = useRef(null);
  const aditionalHandler = useCallback(() => setAdditional((prev) => !prev), []);
  const closeHandler = useCallback(() => {
    return showAddition ? aditionalHandler() : close();
  }, [close, showAddition, aditionalHandler]);

  const createBoardHandler = (e) => {
    e.preventDefault();
    createBoard();
    close();
    clear();
  };

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, [input, isOpen]);

  return (
    <Modal
      as={StyledModal}
      centered={false}
      basic
      closeIcon
      size="mini"
      onClose={closeHandler}
      open={isOpen}
    >
      <Modal.Content as={ModalContent} color={newBoard.color} img={newBoard.image}>
        <Modal.Description>
          <ModalForm onSubmit={createBoardHandler}>
            <ModalInput
              placeholder="Добавить заголовок доски"
              ref={input}
              type="text"
              value={newBoard.name}
              onChange={newBoardHandler}
              name="name"
            />
            <Dropdown
              options={teamList}
              defaultValue={teamList.length && teamList[0].value}
              onChange={teamHandler}
              as={StyledDropDown}
            />
          </ModalForm>
        </Modal.Description>
      </Modal.Content>
      <BackgroundPicker
        background={newBoard.color || newBoard.image}
        show={showAddition}
        changeShow={aditionalHandler}
      />
    </Modal>
  );
}
