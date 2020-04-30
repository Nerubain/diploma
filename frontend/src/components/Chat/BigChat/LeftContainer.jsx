import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';

import useSearch from '@hooks/useSearch';
import FriendList from './FriendList';
import { LeftContainer, SearchWrapper, Reset } from './style';

export default function Left({ onSelect, selected, chats }) {
  const [width, setWidth] = useState(273);
  const [minWidth, setMinWidth] = useState(273);
  const [maxWidth, setMaxWidth] = useState(window.innerWidth - 380);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { search, onChange, filteredList, resetSearch } = useSearch(chats, ['user', 'name']);

  const resize = (e, dir, ref, d) => setWidth(width + d.width);
  const resizeWindow = () => setWindowWidth(window.innerWidth);
  const onEscape = (e) => (e.keyCode === 27 ? resetSearch() : null);

  useEffect(() => {
    if (windowWidth > 690) {
      setMaxWidth(windowWidth - 380);
      setMinWidth((prev) => (prev !== 260 ? 260 : prev));
    } else {
      setMaxWidth(690);
      setMinWidth(320);
    }
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);
  return (
    <LeftContainer
      size={{ width }}
      enable={{ right: windowWidth > 690 }}
      minWidth={minWidth}
      maxWidth={maxWidth}
      onResizeStop={resize}
      show={selected}
    >
      <SearchWrapper>
        <Input placeholder="Введите имя" fluid icon={!!search.length}>
          <input value={search} onChange={onChange} onKeyDown={onEscape} />
          {!!search.length && <Reset name="close" onClick={resetSearch} />}
        </Input>
      </SearchWrapper>
      <FriendList onClick={onSelect} selected={selected} chats={filteredList} />
    </LeftContainer>
  );
}
