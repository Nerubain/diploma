import React, { useContext } from 'react';

import { AddBoardContext } from '@context/addmodal.context';
import { BackgroundsContext } from '@context/backgrounds.context';
import SmallList from './Lists/SmallList';
import { BackGrounds, BackgroundButton } from './style';

export default function BackgroundPicker({ background, changeShow }) {
  const { newBoardHandler, colors } = useContext(AddBoardContext);
  const { images } = useContext(BackgroundsContext);
  return (
    <BackGrounds>
      <SmallList list={images} type="image" background={background} onClick={newBoardHandler} />
      <SmallList list={colors} type="color" background={background} onClick={newBoardHandler} />
      <BackgroundButton color="white" onClick={changeShow}>
        <span>...</span>
      </BackgroundButton>
    </BackGrounds>
  );
}
