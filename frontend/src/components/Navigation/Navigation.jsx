import React, { useContext } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import navigation from '../../assets/objects/navigation';
import UserDropDown from './UserDropDown';
import { SearchInput, StyledItem, MobileItem } from './style';
import { SidebarContext } from '../../context/sidebar.context';

const Navigation = () => {
  const history = useHistory();
  const { setVisible, visible } = useContext(SidebarContext);
  const activeItem = (href) => history.location.pathname === href;

  const clickHandler = (href) => history.push(href);
  const sidebarHandler = () => setVisible(!visible);

  const content = {
    search: <SearchInput icon="search" inverted />,
    add: <Button icon="plus" inverted size="mini" />,
  };

  return (
    <Menu color="teal" inverted size="mini" icon fixed="top">
      {navigation.map(({ icon, name, href, type, position }) => (
        <StyledItem
          key={`${href}-${name}`}
          icon={icon}
          name={name}
          position={position}
          active={activeItem(href)}
          content={type ? content[type] : null}
          type={type}
          onClick={!type ? () => clickHandler(href) : null}
        />
      ))}
      <MobileItem onClick={sidebarHandler}>
        <Icon name="search" size="large" />
      </MobileItem>
      <Menu.Menu position="right">
        <Menu.Item>
          <Icon name="plus" size="large" />
        </Menu.Item>
        <UserDropDown />
      </Menu.Menu>
      <MobileItem onClick={sidebarHandler}>
        <Icon name="bars" size="large" />
      </MobileItem>
    </Menu>
  );
};

export default Navigation;
