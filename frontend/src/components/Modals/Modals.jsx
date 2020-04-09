import React, { useContext } from 'react';

import AddBoard from './Addboard';
import { ModalContext } from '../../context/modal.context';

export default function Modals() {
  const { modal, closeModal } = useContext(ModalContext);

  return (
    <div>
      <AddBoard modal={modal} close={closeModal} />
    </div>
  );
}
