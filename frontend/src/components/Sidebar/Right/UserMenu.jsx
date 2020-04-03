import React, { useContext } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import { SidebarContext } from '../../../context/sidebar.context';

export default function MenuItems() {
  const { right, sidebarHandler } = useContext(SidebarContext);

  return (
    <Sidebar
      as={Menu}
      onHide={sidebarHandler}
      animation={'overlay'}
      direction={'right'}
      icon="labeled"
      inverted
      vertical
      visible={right}
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </Sidebar>
  );
}
