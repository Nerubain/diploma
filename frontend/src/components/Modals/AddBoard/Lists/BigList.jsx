import React, { useContext } from 'react';
import { Loader } from 'semantic-ui-react';

import { BackgroundsContext } from '@context/backgrounds.context';
import BigItem from './BigItem';
import { MenuSection, MenuItemList } from '../style';
import ListHeader from './ListHeader';

export default function BigList({ list, title, type, crop, menuType, menuHandler, isRequest }) {
  const { imageRef, loading } = useContext(BackgroundsContext);
  const newList = crop ? list.slice(0, 6) : [...list];
  const createRef = (index, length) => length === index + 1 && type === 'image' && isRequest;
  const key = (item) => item.image || item;

  return (
    <MenuSection>
      {title && <ListHeader title={title} menuType={menuType} menuHandler={menuHandler} />}
      <MenuItemList>
        {newList.map((item, index) => {
          if (createRef(index, newList.length))
            return <BigItem item={item} type={type} customRef={imageRef} key={key(item)} />;
          return <BigItem item={item} type={type} key={key(item)} />;
        })}
        {loading && <Loader active inline="centered" inverted style={{ borderColor: 'red' }} />}
      </MenuItemList>
    </MenuSection>
  );
}
