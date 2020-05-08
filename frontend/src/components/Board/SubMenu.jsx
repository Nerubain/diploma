import React, { useContext } from 'react';

import { ModalContext } from '@context/modal.context';
import { SocketContext } from '@context/socket.context';
import TransparentInput from './TransparentInput';
import TransparentButton from './TransparentButton';
import FocusWrapper from './FocusWrapper';
import { SubMenuWrapper } from './style';

export default function SubMenu({ board, favouriteId, updateTitle }) {
  const { selectModal } = useContext(ModalContext);
  const { updateFavourite } = useContext(SocketContext);
  const modalHandler = () => selectModal('add_to_team');

  const favouriteHandler = () =>
    updateFavourite({ boardId: board._id, teamId: favouriteId, remove: board.favourite });

  return (
    <SubMenuWrapper>
      <FocusWrapper>
        <TransparentInput boardName={board.title} update={updateTitle} />
      </FocusWrapper>
      <TransparentButton
        icon="star outline"
        favourite={board.favourite}
        onClick={favouriteHandler}
      />
      <TransparentButton label="Добавить сотрудника" onClick={modalHandler} />
    </SubMenuWrapper>
  );
}
