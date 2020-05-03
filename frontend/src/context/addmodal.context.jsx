/* eslint-disable camelcase */
import React, { createContext, useState, useCallback, useEffect, useContext } from 'react';
import { useStoreon } from 'storeon/react';

import { BackgroundsContext } from '@context/backgrounds.context';

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

export const AddBoardProvider = ({ children, closeModal, team, name }) => {
  const { user, dispatch } = useStoreon('user');
  const { initialImage } = useContext(BackgroundsContext);
  const [teamList, setList] = useState([]);
  const [newBoard, setBoard] = useState({ name: '', team: '', image: '', color: colors[0] });

  const listHandler = useCallback(() => {
    const noTeam = { key: 'pesonal', text: 'Без команды', value: 'personal' };
    const teams = [
      noTeam,
      ...user.teams.map(({ id, label }) => ({ key: id, text: label, value: id })),
    ];
    setBoard((prev) => ({ ...prev, team, name }));
    setList(teams);
  }, [user, team, name]);

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

  const setInitialImage = useCallback(() => {
    setBoard((prev) => ({ ...prev, image: initialImage, color: '' }));
  }, [initialImage]);

  useEffect(() => {
    listHandler();
    setInitialImage();
  }, [listHandler, setInitialImage]);

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
