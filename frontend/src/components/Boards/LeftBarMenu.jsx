import React, { useContext } from 'react';
import { useStoreon } from 'storeon/react';
import { useRouteMatch } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import { ModalContext } from '@context/modal.context';
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
  const { selectModal } = useContext(ModalContext);

  const modalHandler = () => selectModal('create_team');
  const links = [
    {
      icon: 'table',
      label: 'Доски',
      href: `/${user.userName}/boards`,
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
          <span>Команды</span> <AddButton icon="plus" size="tiny" onClick={modalHandler} />
        </Label>
        {user.teams.slice(2).map(({ title, url }) => (
          <ListItem key={`${url}-${title}`} active={checkActive(url)} to={url}>
            <ItemMargin>
              <Icon name="group" />
            </ItemMargin>
            {title}
          </ListItem>
        ))}
      </LeftBarContainer>
    </LeftBarWrapper>
  );
}
