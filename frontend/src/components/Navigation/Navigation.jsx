import React, { useContext } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import UserDropDown from './UserDropDown';
import { SearchInput, MobileItem, StyledItem } from './style';
import { SidebarContext } from '../../context/sidebar.context';

const Navigation = ({ segmentHandler }) => {
  const history = useHistory();
  const { sidebarHandler } = useContext(SidebarContext);

  const boardsHandler = () => segmentHandler('boards');
  const rightHandler = () => sidebarHandler('right');

  const goHome = () => history.push('/home/profile');

  return (
    <Menu color="teal" inverted size="small" icon style={{ margin: 0, height: 45, minHeight: 45 }}>
      <StyledItem icon="home" onClick={goHome} />
      <StyledItem icon="table" name="Доски" onClick={boardsHandler} />
      <StyledItem content={<SearchInput icon="search" inverted />} type={'search'} />
      <MobileItem>
        <Icon name="search" size="large" />
      </MobileItem>
      <Menu.Menu position="right">
        <Menu.Item>
          <Icon name="plus" size="large" />
        </Menu.Item>
        <UserDropDown />
      </Menu.Menu>
      <MobileItem onClick={rightHandler}>
        <Icon name="bars" size="large" />
      </MobileItem>
    </Menu>
  );
};

export default Navigation;
