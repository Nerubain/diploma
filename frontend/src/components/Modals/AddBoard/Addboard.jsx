import React, { useRef, useEffect, useContext } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

import { AddBoardContext } from '../../../context/addmodal.context';
import BackgroundPicker from './BackgroundPicker';
import PickerMenu from './PickerMenu';
import { StyledDropDown, ModalContent, ModalForm, ModalInput } from './style';

export default function Addboard({ subMenu, subMenuHandler }) {
  const { newBoardHandler, newBoard, teamHandler, teamList, createBoard } = useContext(
    AddBoardContext
  );
  const disabled = newBoard.name < 5;
  const input = useRef(null);

  const createBoardHandler = (e) => {
    e.preventDefault();
    createBoard();
  };

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, [input, subMenu]);

  return (
    <>
      <ModalContent color={newBoard.color} img={newBoard.image}>
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
            value={newBoard.team}
            onChange={teamHandler}
            as={StyledDropDown}
          />
        </ModalForm>
      </ModalContent>
      <BackgroundPicker background={newBoard.color || newBoard.image} changeShow={subMenuHandler} />
      {subMenu && <PickerMenu close={subMenuHandler} />}
      <Button
        size="small"
        disabled={disabled}
        color={!disabled ? 'green' : null}
        onClick={createBoardHandler}
        fluid
      >
        Создать доску
      </Button>
    </>
  );
}
