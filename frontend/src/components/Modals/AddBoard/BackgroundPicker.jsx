import React, { useContext } from 'react';

import { AddBoardContext } from '../../../context/addmodal.context';
import PickerMenu from './PickerMenu';
import SmallList from './Lists/SmallList';
import { BackGrounds, BackgroundButton } from './style';

export default function BackgroundPicker({ background, show, changeShow }) {
  const { newBoardHandler, images, colors } = useContext(AddBoardContext);
  return (
    <BackGrounds>
      <SmallList list={images} type="image" background={background} onClick={newBoardHandler} />
      <SmallList list={colors} type="color" background={background} onClick={newBoardHandler} />
      <BackgroundButton color="white" onClick={changeShow}>
        <span>...</span>
      </BackgroundButton>
      <PickerMenu show={show} close={changeShow} />
    </BackGrounds>
  );
}
