import React, { useContext } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import UserDropDown from './UserDropDown';
import { SearchInput, MobileItem, StyledItem } from './style';
import { SidebarContext } from '../../context/sidebar.context';
import { SegmentContext } from '../../context/segment.context';

const Navigation = () => {
  const history = useHistory();
  const { sidebarHandler } = useContext(SidebarContext);
  const { showSegment } = useContext(SegmentContext);

  const boardsHandler = () => showSegment('boards');
  const addHandler = () => showSegment('add');
  const searchHanlder = () => showSegment('search');
  const rightHandler = () => sidebarHandler('right');

  const goHome = () => history.push('/home/profile');

  return (
    <Menu color="teal" inverted size="small" icon style={{ margin: 0, height: 45, minHeight: 45 }}>
      <StyledItem icon="home" onClick={goHome} />
      <StyledItem icon="table" name="Доски" onClick={boardsHandler} />
      <StyledItem content={<SearchInput icon="search" />} type={'search'} onClick={searchHanlder} />
      <MobileItem>
        <Icon name="search" size="large" />
      </MobileItem>
      <Menu.Menu position="right">
        <Menu.Item onClick={addHandler}>
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
