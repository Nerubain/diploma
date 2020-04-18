import React, { useContext } from 'react';

import { AddBoardContext } from '../../../context/addmodal.context';
import BigList from './Lists/BigList';
import { MenuContainer } from './style';

export default function InitialMenu({ show, menuHandler }) {
  const { colors, images } = useContext(AddBoardContext);
  return (
    <MenuContainer show={show}>
      <BigList
        list={images}
        type="image"
        title="Фотографии"
        crop
        menuHandler={menuHandler}
        menuType="images"
      />
      <BigList
        list={colors}
        type="color"
        title="Цвета"
        crop
        menuHandler={menuHandler}
        menuType="colors"
      />
    </MenuContainer>
  );
}
