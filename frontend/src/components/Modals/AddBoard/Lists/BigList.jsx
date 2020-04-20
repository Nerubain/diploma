import React, { useContext } from 'react';

import BigItem from './BigItem';
import { BackgroundsContext } from '../../../../context/backgrounds.context';

import { MenuSection, MenuItemList } from '../style';
import ListHeader from './ListHeader';

export default function BigList({ list, title, type, crop, menuType, menuHandler, isRequest }) {
  const { imageRef } = useContext(BackgroundsContext);

  const newList = crop ? list.slice(0, 6) : [...list];

  const createRef = (index, length) => length === index + 1 && type === 'image' && isRequest;

  const key = (item) => item.replaced || item;
  return (
    <MenuSection>
      {title && <ListHeader title={title} menuType={menuType} menuHandler={menuHandler} />}
      <MenuItemList>
        {newList.map((item, index) => {
          if (createRef(index, newList.length))
            return <BigItem item={item} type={type} customRef={imageRef} key={key(item)} />;
          return <BigItem item={item} type={type} key={key(item)} />;
        })}
      </MenuItemList>
    </MenuSection>
  );
}
