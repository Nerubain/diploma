import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import {
  SegmentMenuList,
  SegmentListItem,
  SegmentItemIcon,
  SegmentItemTitle,
  SegmentItemHeader,
  SegmentItemDescription,
} from '../style';

import { SegmentContext } from '../../../context/segment.context';

export default function AddSegment() {
  const { showSegment } = useContext(SegmentContext);

  const menu = [
    {
      label: 'Создать доску',
      icon: 'table',
      text:
        'Доска представляет собой совокупность карточек, упорядоченных в списках. Используйте её для управления проектом, отслеживания или организации чего угодно',
      handler: () => showSegment('addboard'),
    },
    {
      label: 'Создание команды',
      icon: 'group',
      text:
        'Команда представляет собой группу досок и людей. Используйте ее для организации работы вашей компании, вашей подработки, семейных дел или отдыха с друзьями.',
      handler: null,
    },
  ];

  return (
    <SegmentMenuList>
      {menu.map(({ Modal, label, icon, text, handler }) => (
        <SegmentListItem onClick={handler} key={`${label}+${text}`}>
          <SegmentItemHeader>
            <SegmentItemIcon>
              <Icon name={icon} />
            </SegmentItemIcon>
            <SegmentItemTitle>{label}</SegmentItemTitle>
          </SegmentItemHeader>
          <SegmentItemDescription>{text}</SegmentItemDescription>
        </SegmentListItem>
      ))}
    </SegmentMenuList>
  );
}
