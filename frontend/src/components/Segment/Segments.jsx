import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useStoreon } from 'storeon/react';

import BoadardsSegment from './Boards/BoardsSegment';
import MenuSegment from './MenuSegment/MenuSegment';
import SegmentList from './MenuSegment/SegmentList';
import { ModalContext } from '../../context/modal.context';
import { SegmentContext } from '../../context/segment.context';

export default function Segments() {
  const { user } = useStoreon('user');
  const history = useHistory();
  const { selectModal } = useContext(ModalContext);
  const { addRef, userMenuRef, close } = useContext(SegmentContext);

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
      handler: () => modalHandler('create_board', 'personal', ''),
    },
    {
      label: 'Создание команды',
      icon: 'group',
      text:
        'Команда представляет собой группу досок и людей. Используйте ее для организации работы вашей компании, вашей подработки, семейных дел или отдыха с друзьями.',
      handler: () => modalHandler('create_team'),
    },
  ];

  const userMenu = [
    {
      label: 'Профиль',
      icon: 'user',
      handler: () => toLinkHanlder(`/${user.name}/profile`),
    },
    {
      label: 'Настройки',
      icon: 'cog',
      handler: () => toLinkHanlder(`/${user.name}/settings`),
    },
    {
      label: 'Чат ',
      icon: 'chat',
      handler: () => toLinkHanlder(`/chat`),
    },
    {
      label: 'Выход ',
      icon: 'log out',
      handler: null,
    },
  ];

  return (
    <>
      <BoadardsSegment />
      <MenuSegment name="add" label="Создать" customRef={addRef}>
        <SegmentList menu={actionMenu} />
      </MenuSegment>
      <MenuSegment name="user" label={user.name} customRef={userMenuRef}>
        <SegmentList menu={userMenu} />
      </MenuSegment>
    </>
  );
}
