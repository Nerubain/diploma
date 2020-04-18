import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';

import { AddBoardContext } from '../../../context/addmodal.context';
import InitialMenu from './InitialMenu';
import SubMenu from './SubMenu';
import { PickerMenuContainer, PickerMenuHeader, PickerMenuTitle, ControllIcon } from './style';

const titles = {
  initial: 'Фон доски',
  colors: 'Цвета',
  images: 'Фотографии',
};

export default function PickerMenu({ show, close }) {
  const { colors, images } = useContext(AddBoardContext);
  const [shift, setShift] = useState(0);
  const [menu, setMenu] = useState('initial');
  const ref = useRef(null);

  const menuHandler = (e) => setMenu(e.target.name);

  const goToMain = () => setMenu('initial');

  const resizeHandler = useCallback(() => {
    const shiftValue = -(880 - window.innerWidth) * 0.7;
    return window.innerWidth <= 880 ? setShift(shiftValue) : setShift(0);
  }, []);

  useEffect(() => {
    const shiftValue = -(880 - window.innerWidth) * 0.7;
    if (window.innerWidth <= 880) {
      setShift(shiftValue);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHandler, shift]);

  return (
    <PickerMenuContainer show={show} ref={ref} shift={shift}>
      <PickerMenuHeader>
        {menu !== 'initial' && <ControllIcon name="chevron left" onClick={goToMain} />}
        <PickerMenuTitle>{titles[menu]}</PickerMenuTitle>
        <ControllIcon name="close" right="right" onClick={close} />
      </PickerMenuHeader>
      <InitialMenu show={menu === 'initial'} menuHandler={menuHandler} />
      <SubMenu show={menu === 'colors'} list={colors} type="color" />
      <SubMenu show={menu === 'images'} list={images} type="image" />
    </PickerMenuContainer>
  );
}
