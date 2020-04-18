import React, { useContext } from 'react';

import BigItem from './BigItem';
import { AddBoardContext } from '../../../../context/addmodal.context';
import { MenuSection, MenuHeader, MenuTitle, HeaderButton, MenuItemList } from '../style';

export default function BigList({ list, title, type, crop, menuType, menuHandler }) {
  const { lastImageElementRef } = useContext(AddBoardContext);
  const newList = crop ? list.slice(0, 6) : [...list];

  return (
    <MenuSection>
      {title && (
        <MenuHeader>
          <MenuTitle>{title}</MenuTitle>
          <HeaderButton name={menuType} onClick={menuHandler}>
            Подробнее
          </HeaderButton>
        </MenuHeader>
      )}
      <MenuItemList>
        {newList.map((item, index) => {
          if (newList.length === index + 1 && type === 'image')
            return (
              <BigItem
                item={item}
                type={type}
                customRef={lastImageElementRef}
                key={item.replaced || item}
              />
            );

          return <BigItem item={item} type={type} key={item.replaced || item} />;
        })}
      </MenuItemList>
    </MenuSection>
  );
}
