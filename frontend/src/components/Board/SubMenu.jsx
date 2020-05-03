import React, { useContext } from 'react';

import { ModalContext } from '@context/modal.context';
import TransparentInput from './TransparentInput';
import TransparentButton from './TransparentButton';
import FocusWrapper from './FocusWrapper';
import { SubMenuWrapper } from './style';

export default function SubMenu() {
  const { selectModal } = useContext(ModalContext);

  const modalHandler = () => selectModal('add_to_team');

  return (
    <SubMenuWrapper>
      <FocusWrapper>
        <TransparentInput />
      </FocusWrapper>
      <TransparentButton icon="star outline" />
      <TransparentButton label="Добавить сотрудника" onClick={modalHandler} />
    </SubMenuWrapper>
  );
}
