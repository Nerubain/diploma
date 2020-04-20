import React from 'react';

import BigList from './Lists/BigList';
import { MenuContainer } from './style';

export default function SubMenu({ list, type, menu }) {
  return (
    <MenuContainer>
      <BigList list={list} type={type} isRequest={menu === 'images'} />
    </MenuContainer>
  );
}
