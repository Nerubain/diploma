import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import navigation from '../../assets/objects/navigation';
import UserDropDown from './UserDropDown';
import { SearchInput } from './style';

const Navigation = () => {
  const history = useHistory();

  const activeItem = (href) => history.location.pathname === href;

  const clickHandler = (href) => history.push(href);

  const content = {
    search: <SearchInput icon="search" inverted />,
    add: <Button icon="plus" inverted size="mini" />,
  };

  return (
    <Menu color="teal" inverted size="small">
      {navigation.map(({ icon, name, href, type, position }) => (
        <Menu.Item
          key={`${href}-${name}`}
          icon={icon}
          name={name}
          position={position}
          active={activeItem(href)}
          content={type ? content[type] : null}
          onClick={!type ? () => clickHandler(href) : null}
        />
      ))}
      <Menu.Menu position="right">
        <Menu.Item>
          <Button color="white" icon="plus" inverted size="mini" />
        </Menu.Item>
        <UserDropDown />
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;
