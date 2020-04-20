import React, { useContext, useState, useCallback } from 'react';
import { Modal } from 'semantic-ui-react';

import AddBoard from './AddBoard/Addboard';
import { AddBoardProvider } from '../../context/addmodal.context';
import { BackgroundsProvider } from '../../context/backgrounds.context';
import { ModalContext } from '../../context/modal.context';
import { StyledModal } from './AddBoard/style';

const modals = {
  create_board: StyledModal,
};

export default function Modals() {
  const { modal, closeModal } = useContext(ModalContext);
  const [subMenu, setSubMenu] = useState(false);

  const subMenuHandler = useCallback(() => setSubMenu((prev) => !prev), []);

  const closeModalHandler = useCallback(() => {
    return subMenu ? subMenuHandler() : closeModal();
  }, [closeModal, subMenu, subMenuHandler]);

  return (
    <BackgroundsProvider>
      <Modal
        as={modals[modal.name]}
        centered={false}
        basic
        closeIcon
        size="mini"
        onClose={closeModalHandler}
        open={!!modal.name}
      >
        {modal.name === 'create_board' && (
          <AddBoardProvider team={modal.team} closeModal={closeModal}>
            <AddBoard subMenu={subMenu} subMenuHandler={subMenuHandler} />
          </AddBoardProvider>
        )}
      </Modal>
    </BackgroundsProvider>
  );
}
