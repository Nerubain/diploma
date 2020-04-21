import React from 'react';
import { Icon, Button } from 'semantic-ui-react';

import { ListLabelWrapper, ListLabelLink, ListLabelText } from '../style';

export default function ListHeader({ category, handler, status }) {
  return (
    <ListLabelWrapper>
      <Icon name={category.icon} size="small" />
      {category.url ? (
        <ListLabelLink to={category.url}>{category.label} </ListLabelLink>
      ) : (
        <ListLabelText>{category.label}</ListLabelText>
      )}

      <Button icon={status} size="tiny" onClick={handler} />
    </ListLabelWrapper>
  );
}
