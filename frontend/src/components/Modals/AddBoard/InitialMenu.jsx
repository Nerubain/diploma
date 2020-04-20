import React, { useContext } from 'react';

import { AddBoardContext } from '../../../context/addmodal.context';
import { BackgroundsContext } from '../../../context/backgrounds.context';

import BigList from './Lists/BigList';
import { MenuContainer } from './style';

export default function InitialMenu({ menuHandler }) {
  const { colors } = useContext(AddBoardContext);
  const { images } = useContext(BackgroundsContext);

  return (
    <MenuContainer>
      <BigList
        list={images}
        type="image"
        title="Фотографии"
        menuHandler={menuHandler}
        menuType="images"
        crop
      />
      <BigList
        list={colors}
        type="color"
        title="Цвета"
        menuHandler={menuHandler}
        menuType="colors"
        crop
      />
    </MenuContainer>
  );
}
