import React, { useContext } from 'react';

import AddBoard from './AddBoard/Addboard';
import { AddBoardProvider } from '../../context/addmodal.context';
import { ModalContext } from '../../context/modal.context';

export default function Modals() {
  const { modal, closeModal } = useContext(ModalContext);

  return (
    <div>
      <AddBoardProvider>
        <AddBoard isOpen={modal === 'create_board'} close={closeModal} />
      </AddBoardProvider>
    </div>
  );
}
