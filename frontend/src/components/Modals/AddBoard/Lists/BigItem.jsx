import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { AddBoardContext } from '@context/addmodal.context';
import { MenuItem, MenuItemContent } from '../style';

export default function BigItem({ item, type, customRef }) {
  const { newBoard, newBoardHandler } = useContext(AddBoardContext);
  const selector = item.image || item;
  return (
    <MenuItem key={selector} ref={customRef}>
      <MenuItemContent
        image={item.image || ''}
        color={item.image ? '' : item}
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
