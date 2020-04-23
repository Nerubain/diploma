import React from 'react';
import { Icon } from 'semantic-ui-react';

import { BackgroundButton } from '../style';

export default function SmallList({ list, type, background, onClick }) {
  return (
    <>
      {list.slice(0, 4).map((item) => {
        const selector = item.image || item;
        return (
          <BackgroundButton
            image={item.image || ''}
            color={item.image ? '' : item}
            key={selector}
            name={type}
            onClick={onClick}
            value={selector}
          >
            {background === selector && <Icon name="check" />}
          </BackgroundButton>
        );
      })}
    </>
  );
}
