import React from 'react';

import { MenuHeader, MenuTitle, HeaderButton } from '../style';

export default function ListHeader({ title, menuType, menuHandler }) {
  return (
    <MenuHeader>
      <MenuTitle>{title}</MenuTitle>
      <HeaderButton name={menuType} onClick={menuHandler}>
        Подробнее
      </HeaderButton>
    </MenuHeader>
  );
}
