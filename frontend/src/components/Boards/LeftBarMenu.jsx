import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import { SideBarContainer, ListItem, ItemMargin, TopMenu, Label, AddButton } from './style';

const user = {
  name: 'nerub',
};

export default function LeftBarMenu() {
  const match = useRouteMatch();

  const links = [
    {
      icon: 'table',
      label: 'Доски',
      href: `/${user.name}/boards`,
    },
  ];

  const teamLinks = [
    {
      icon: 'group',
      label: 'squad',
      href: `/squad/board`,
    },
    {
      icon: 'group',
      label: 'squader',
      href: `/squader/board`,
    },
  ];

  const checkActive = (link) => (match.url === link ? 'true' : undefined);
  return (
    <SideBarContainer>
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
      {teamLinks.map(({ icon, label, href }) => (
        <ListItem key={`${href}-${label}`} active={checkActive(href)} to={href}>
          <ItemMargin>
            <Icon name={icon} />
          </ItemMargin>
          {label}
        </ListItem>
      ))}
    </SideBarContainer>
  );
}
