import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useStoreon } from 'storeon/react';

import { ModalContext } from '@context/modal.context';
import { SegmentContext } from '@context/segment.context';
import BoadardsSegment from './Boards/BoardsSegment';
import MenuSegment from './MenuSegment/MenuSegment';
import SegmentList from './MenuSegment/SegmentList';

export default function Segments() {
  const { user } = useStoreon('user');
  const history = useHistory();
  const { selectModal } = useContext(ModalContext);
  const { addRef, userMenuRef, close, segment } = useContext(SegmentContext);

  const modalHandler = (name, team, value) => {
    close();
    selectModal(name, team, value);
  };

  const toLinkHanlder = (link) => {
    close();
    history.push(link);
  };

  const actionMenu = [
    {
      label: 'Создать доску',
      icon: 'table',
      text:
        'Доска представляет собой совокупность карточек, упорядоченных в списках. Используйте её для управления проектом, отслеживания или организации чего угодно',
      handlerParams: ['create_board', user.teams[1]._id, ''],
    },
    {
      label: 'Создание команды',
      icon: 'group',
      text:
        'Команда представляет собой группу досок и людей. Используйте ее для организации работы вашей компании, вашей подработки, семейных дел или отдыха с друзьями.',
      handlerParams: ['create_team', '', ''],
    },
  ];

  const userMenu = [
    {
      label: 'Профиль',
      icon: 'user',
      handlerParams: [`/${user.userName}/profile`],
    },
    {
      label: 'Чат ',
      icon: 'chat',
      handlerParams: [`/chat`],
    },
    {
      label: 'Выход ',
      icon: 'log out',
      handler: [null],
    },
  ];

  return (
    <>
      {segment.type === 'boards' && <BoadardsSegment />}
      {segment.type === 'add' && (
        <MenuSegment label="Создать" customRef={addRef}>
          <SegmentList menu={actionMenu} handler={modalHandler} />
        </MenuSegment>
      )}
      {segment.type === 'user' && (
        <MenuSegment label={user.userName} customRef={userMenuRef}>
          <SegmentList menu={userMenu} handler={toLinkHanlder} />
        </MenuSegment>
      )}
    </>
  );
}
