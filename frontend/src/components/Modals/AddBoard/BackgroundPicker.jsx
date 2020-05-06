import React, { useContext } from 'react';

import { AddBoardContext } from '@context/addmodal.context';
import { BackgroundsContext } from '@context/backgrounds.context';
import SmallList from './Lists/SmallList';
import { BackGrounds, BackgroundButton } from './style';

export default function BackgroundPicker({ background, changeShow }) {
  const { newBackgroundHandler, colors } = useContext(AddBoardContext);
  const { images } = useContext(BackgroundsContext);
  return (
    <BackGrounds>
      <SmallList
        list={images}
        type="image"
        clear="color"
        background={background}
        onClick={newBackgroundHandler}
      />
      <SmallList
        list={colors}
        type="color"
        clear="image"
        background={background}
        onClick={newBackgroundHandler}
      />
      <BackgroundButton color="white" onClick={changeShow}>
        <span>...</span>
      </BackgroundButton>
    </BackGrounds>
  );
}
