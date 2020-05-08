import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';

import { AddBoardContext } from '@context/addmodal.context';
import { BackgroundsContext } from '@context/backgrounds.context';
import InitialMenu from './InitialMenu';
import SubMenu from './SubMenu';
import { PickerMenuContainer, PickerMenuHeader, PickerMenuTitle, ControllIcon } from './style';

const titles = {
  initial: 'Фон доски',
  colors: 'Цвета',
  images: 'Фотографии',
};

export default function PickerMenu({ close }) {
  const { colors } = useContext(AddBoardContext);
  const { images } = useContext(BackgroundsContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState('initial');
  const shiftValue = useCallback(() => {
    if (width <= 370) return 0;
    if (width < 600) return -(370 - width) * 0.6;
    if (width < 880) return -(445 - width) * 0.7;
    return 305;
  }, [width]);
  const [shift, setShift] = useState(shiftValue());

  const ref = useRef(null);

  const widthHandler = () => setWidth(window.innerWidth);
  const menuHandler = (e) => setMenu(e.target.name);

  const goToMain = () => setMenu('initial');

  const resizeHandler = useCallback(() => {
    setShift(shiftValue());
  }, [shiftValue]);

  useEffect(() => {
    resizeHandler();
  }, [resizeHandler]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('resize', widthHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('resize', widthHandler);
    };
  }, [resizeHandler, shift]);

  return (
    <PickerMenuContainer ref={ref} shift={shift}>
      <PickerMenuHeader>
        {menu !== 'initial' && <ControllIcon name="chevron left" onClick={goToMain} />}
        <PickerMenuTitle>{titles[menu]}</PickerMenuTitle>
        <ControllIcon name="close" right="right" onClick={close} />
      </PickerMenuHeader>
      {menu === 'initial' && <InitialMenu menuHandler={menuHandler} />}
      {menu === 'colors' && <SubMenu list={colors} type="color" clear="image" />}
      {menu === 'images' && <SubMenu list={images} type="image" clear="color" menu={menu} />}
    </PickerMenuContainer>
  );
}
