import React, { useContext } from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';

import { SidebarProvider, SidebarContext } from '../../context/sidebar.context';
import MenuItems from './Menu';

const SidebarMenu = ({ children }) => {
  const { visible } = useContext(SidebarContext);
  return (
    <Sidebar.Pushable as={Segment} style={{ border: '0' }}>
      <MenuItems />
      <Sidebar.Pusher dimmed={visible}>{children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const SidebarWrapper = ({ children }) => {
  return (
    <SidebarProvider>
      <SidebarMenu children={children} />
    </SidebarProvider>
  );
};

export default SidebarWrapper;
