import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { AddBoardContext } from '@context/addmodal.context';
import { MenuItem, MenuItemContent } from '../style';

export default function BigItem({ item, type, customRef }) {
  const { newBoard, newBoardHandler } = useContext(AddBoardContext);
  const selector = item.replaced || item;
  return (
    <MenuItem key={selector} ref={customRef}>
      <MenuItemContent
        image={item.replaced || ''}
        color={item.replaced ? '' : item}
        value={selector}
        key={selector}
        name={type}
        selected={newBoard[type] === selector}
        onClick={newBoardHandler}
      >
        {newBoard[type] === selector && <Icon name="check" />}
      </MenuItemContent>
    </MenuItem>
  );
}
