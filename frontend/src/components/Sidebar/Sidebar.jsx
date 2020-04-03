import React, { useContext } from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';

import { SidebarContext } from '../../context/sidebar.context';
import UserMenu from './Right/UserMenu';
import BoardsMenu from './Left/BoardsMenu';

const SidebarMenu = ({ children }) => {
  const { right } = useContext(SidebarContext);
  return (
    <Sidebar.Pushable as={Segment} style={{ border: '0' }}>
      <UserMenu />
      <Sidebar.Pusher dimmed={right}>{children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default SidebarMenu;
