/* eslint-disable camelcase */
import React, { createContext, useState, useCallback, useEffect, useRef } from 'react';
import { useStoreon } from 'storeon/react';

import useImageSearch from '../hooks/useImageSearch';

export const AddBoardContext = createContext({});

const colors = [
  'rgb(0, 121, 191)',
  'rgb(210, 144, 52)',
  'rgb(81, 152, 57)',
  'rgb(176, 70, 50)',
  'rgb(137, 96, 158)',
  'rgb(205, 90, 145)',
  'rgb(75, 191, 107)',
  'rgb(0, 174, 204)',
  'rgb(131, 140, 145)',
];

export const AddBoardProvider = ({ children }) => {
  const { user, dispatch } = useStoreon('user');
  const [page, setPage] = useState(5);
  const { images, loading, hasMore } = useImageSearch(page);
  const [teamList, setList] = useState([]);
  const [newBoard, setBoard] = useState({ name: '', team: '', image: '', color: '' });
  const observer = useRef(null);

  const lastImageElementRef = useCallback(
    (node) => {
      if (loading) return null;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const listHandler = useCallback(() => {
    const noTeam = { key: 12312, text: 'Без команды', value: 'personal' };
    const teams = [
      noTeam,
      ...user.teams.map(({ id, label }) => ({ key: id, text: label, value: id })),
    ];
    newBoardHandler({ target: { name: 'team', value: teams[0].value } });
    setList(teams);
  }, [user]);

  const newBoardHandler = ({ target }) =>
    setBoard((prev) => {
      let clear;
      if (target.name === 'color') clear = { image: '' };
      else if (target.name === 'image') clear = { color: '' };
      else clear = {};
      return { ...prev, [target.name]: target.value, ...clear };
    });
  const teamHandler = (e, { value }) => setBoard((prev) => ({ ...prev, team: value }));

  const clear = () =>
    setBoard((prev) => ({ ...prev, color: '', name: '', team: teamList[0].value }));

  const createBoard = useCallback(() => {
    dispatch('boards/create', newBoard);
  }, [dispatch, newBoard]);

  useEffect(() => {
    listHandler();
    setBoard((prev) => ({ ...prev, image: images.length && images[0].replaced }));
  }, [listHandler, images]);

  return (
    <AddBoardContext.Provider
      value={{
        clear,
        images,
        colors,
        teamList,
        newBoard,
        teamHandler,
        createBoard,
        newBoardHandler,
        lastImageElementRef,
      }}
    >
      {children}
    </AddBoardContext.Provider>
  );
};
