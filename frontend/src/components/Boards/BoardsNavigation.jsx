import React from 'react';
import { Icon } from 'semantic-ui-react';

import { LabelLinks, LabelLink } from './boards-style';

export default function BoardsNavigation({ show }) {
  return (
    <LabelLinks show={show}>
      <LabelLink to="/nerub/board">
        <Icon name="table" />
        <span>Доски</span>
      </LabelLink>
      <LabelLink to="/nerub/board">
        <Icon name="user" />
        <span>Участники</span>
      </LabelLink>
      <LabelLink to="/nerub/board">
        <Icon name="cog" />
        <span>Настройки</span>
      </LabelLink>
    </LabelLinks>
  );
}
