import React, { useContext } from 'react';

import { AddBoardContext } from '@context/addmodal.context';
import { BackgroundsContext } from '@context/backgrounds.context';

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
        clear="color"
        title="Фотографии"
        menuHandler={menuHandler}
        menuType="images"
        crop
      />
      <BigList
        list={colors}
        type="color"
        clear="image"
        title="Цвета"
        menuHandler={menuHandler}
        menuType="colors"
        crop
      />
    </MenuContainer>
  );
}
