import React, { useContext } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import { SidebarContext } from '../../context/sidebar.context';

export default function MenuItems() {
  const { visible, setVisible } = useContext(SidebarContext);
  return (
    <Sidebar
      as={Menu}
      onHide={() => setVisible(false)}
      animation={'overlay'}
      direction={'right'}
      icon="labeled"
      inverted
      vertical
      visible={visible}
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
