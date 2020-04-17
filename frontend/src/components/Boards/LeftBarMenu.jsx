import React from 'react';
import { useStoreon } from 'storeon/react';
import { useRouteMatch } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import {
  LeftBarWrapper,
  LeftBarContainer,
  ListItem,
  ItemMargin,
  TopMenu,
  Label,
  AddButton,
} from './style';

export default function LeftBarMenu() {
  const match = useRouteMatch();
  const { user } = useStoreon('user');
  const links = [
    {
      icon: 'table',
      label: 'Доски',
      href: `/${user.name}/boards`,
    },
  ];

  const checkActive = (link) => (match.url === link ? 'true' : undefined);
  return (
    <LeftBarWrapper>
      <LeftBarContainer>
        <TopMenu>
          {links.map(({ icon, label, href }) => (
            <ListItem key={`${href}-${label}`} active={checkActive(href)} to={href}>
              <ItemMargin>
                <Icon name={icon} />
              </ItemMargin>
              {label}
            </ListItem>
          ))}
        </TopMenu>
        <Label>
          <span>Команды</span> <AddButton icon="plus" size="tiny" />
        </Label>
        {user.teams.map(({ label, url }) => (
          <ListItem key={`${url}-${label}`} active={checkActive(url)} to={url}>
            <ItemMargin>
              <Icon name="group" />
            </ItemMargin>
            {label}
          </ListItem>
        ))}
      </LeftBarContainer>
    </LeftBarWrapper>
  );
}
