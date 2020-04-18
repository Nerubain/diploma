import React from 'react';

import BigList from './Lists/BigList';
import { MenuContainer } from './style';

export default function SubMenu({ show, list, type }) {
  return (
    <MenuContainer show={show}>
      <BigList list={list} type={type} />
    </MenuContainer>
  );
}
