import React, { useContext } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { SearchInput, MobileItem, StyledItem } from './style';
import { SegmentContext } from '../../context/segment.context';

const style = { margin: 0, height: 45, minHeight: 45, zIndex: 1000 };

const Navigation = () => {
  const history = useHistory();
  const { show, boardsRef, addRef, userMenuRef } = useContext(SegmentContext);

  const boardsHandler = () => show('boards', boardsRef);
  const addHandler = () => show('add', addRef);
  const userHandler = () => show('user', userMenuRef);
  const searchHanlder = () => show('search');

  const goHome = () => history.push('/Nerubain/boards');

  return (
    <Menu color="teal" inverted size="small" icon style={style}>
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
          <Image
            avatar
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            slot="segment"
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;
