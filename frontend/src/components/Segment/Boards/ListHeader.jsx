import React from 'react';
import { Icon, Button } from 'semantic-ui-react';

import { ListLabelWrapper, ListLabelLink, ListLabelText } from '../style';

const icons = {
  favourite: 'star outline',
  personal: 'user',
  default: 'group',
};

export default function ListHeader({ team, handler, status }) {
  return (
    <ListLabelWrapper>
      <Icon name={icons[team.type]} size="small" />
      {team.type === 'default' ? (
        <ListLabelLink to={`/team/${team._id}`}>{team.title} </ListLabelLink>
      ) : (
        <ListLabelText>{team.title}</ListLabelText>
      )}

      <Button icon={status} size="tiny" onClick={handler} />
    </ListLabelWrapper>
  );
}
