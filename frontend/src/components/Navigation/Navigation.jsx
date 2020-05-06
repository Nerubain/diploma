import React, { useContext } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import { useStoreon } from 'storeon/react';
import { useHistory } from 'react-router-dom';

import { SegmentContext } from '@context/segment.context';
import { SearchInput, MobileItem, StyledItem, Navigator } from './style';

const style = { margin: 0, height: 45, minHeight: 45, zIndex: 100 };

const Navigation = ({ isborder }) => {
  const history = useHistory();
  const { user } = useStoreon('user');
  const { show, boardsRef, addRef, userMenuRef } = useContext(SegmentContext);

  const boardsHandler = () => show('boards', boardsRef);
  const addHandler = () => show('add', addRef);
  const userHandler = () => show('user', userMenuRef);
  const searchHanlder = () => show('search');
  const goHome = () => history.push('/Nerubain/boards');

  return (
    <Navigator isborder={isborder} color="teal" inverted size="small" icon style={style}>
      <StyledItem icon="home" onClick={goHome} />
      <StyledItem icon="table" name="Доски" onClick={boardsHandler} slot="segment" />
      <StyledItem
        content={<SearchInput icon="search" />}
        type="search"
        onClick={searchHanlder}
        slot="segment"
      />
      <MobileItem onClick={searchHanlder}>
        <Icon name="search" size="large" />
      </MobileItem>
      <Menu.Menu position="right">
        <Menu.Item onClick={addHandler} slot="segment">
          <Icon name="plus" size="large" slot="segment" />
        </Menu.Item>
        <Menu.Item onClick={userHandler} slot="segment">
          <Image avatar src={user.avatar} slot="segment" />
        </Menu.Item>
      </Menu.Menu>
    </Navigator>
  );
};

export default Navigation;
