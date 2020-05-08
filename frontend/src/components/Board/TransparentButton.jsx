import React from 'react';
import { Icon } from 'semantic-ui-react';

import { Button } from './style';

export default function TransparentButton({ label, icon, onClick, style, favourite }) {
  return (
    <Button onClick={onClick} style={style} favourite={favourite}>
      {icon && <Icon name={icon} />}
      {label}
    </Button>
  );
}
