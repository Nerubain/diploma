/* eslint-disable camelcase */
import React, { createContext, useState, useCallback, useEffect, useContext } from 'react';
import { useStoreon } from 'storeon/react';

import { BackgroundsContext } from './backgrounds.context';

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

export const AddBoardProvider = ({ children, closeModal, team }) => {
  const { user, dispatch } = useStoreon('user');
  const { images } = useContext(BackgroundsContext);

  const [teamList, setList] = useState([]);
  const [newBoard, setBoard] = useState({ name: '', team: '', image: '', color: '' });

  const listHandler = useCallback(() => {
    const noTeam = { key: 'pesonal', text: 'Без команды', value: 'personal' };
    const teams = [
      noTeam,
      ...user.teams.map(({ id, label }) => ({ key: id, text: label, value: id })),
    ];
    newBoardHandler({ target: { name: 'team', value: team } });
    setList(teams);
  }, [user, team]);

  const newBoardHandler = ({ target }) =>
    setBoard((prev) => {
      let clear;
      if (target.name === 'color') clear = { image: '' };
      else if (target.name === 'image') clear = { color: '' };
      else clear = {};
      return { ...prev, [target.name]: target.value, ...clear };
    });
  const teamHandler = (e, { value }) => setBoard((prev) => ({ ...prev, team: value }));

  const createBoard = useCallback(() => {
    dispatch('boards/create', newBoard);
    closeModal();
  }, [dispatch, newBoard, closeModal]);

  useEffect(() => {
    listHandler();
    setBoard((prev) => ({ ...prev, image: images.length && images[0].replaced }));
  }, [listHandler, images]);

  return (
    <AddBoardContext.Provider
      value={{
        colors,
        teamList,
        newBoard,
        teamHandler,
        createBoard,
        newBoardHandler,
      }}
    >
      {children}
    </AddBoardContext.Provider>
  );
};
