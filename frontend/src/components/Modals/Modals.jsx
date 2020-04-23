import React, { useContext, useState, useCallback } from 'react';
import { Modal } from 'semantic-ui-react';

import { AddBoardProvider } from '@context/addmodal.context';
import { BackgroundsProvider } from '@context/backgrounds.context';
import { ModalContext } from '@context/modal.context';
import AddBoard from './AddBoard/Addboard';
import AddTeam from './AddTeam/AddTeam';
import { StyledModal } from './AddBoard/style';

const modals = {
  create_board: StyledModal,
};

export default function Modals() {
  const { modal, closeModal } = useContext(ModalContext);
  const [subMenu, setSubMenu] = useState(false);

  const subMenuHandler = useCallback((value) => setSubMenu((prev) => value), []);

  const closeModalHandler = useCallback(() => {
    return subMenu ? subMenuHandler(false) : closeModal();
  }, [closeModal, subMenu, subMenuHandler]);

  return (
    <BackgroundsProvider>
      <Modal
        as={modals[modal.name]}
        open={!!modal.name}
        onClose={closeModalHandler}
        centered={false}
        basic
        closeIcon
        size="mini"
      >
        {modal.name === 'create_board' && (
          <AddBoardProvider team={modal.team} name={modal.param} closeModal={closeModal}>
            <AddBoard subMenu={subMenu} subMenuHandler={subMenuHandler} />
          </AddBoardProvider>
        )}
        {modal.name === 'create_team' && <AddTeam />}
      </Modal>
    </BackgroundsProvider>
  );
}
