/* eslint-disable camelcase */
import React, { createContext, useState, useCallback, useEffect, useContext } from 'react';
import { useStoreon } from 'storeon/react';

import { SocketContext } from '@context/socket.context';
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
  const { user } = useStoreon('user');
  const { initialImage } = useContext(BackgroundsContext);
  const { createBoardSocket } = useContext(SocketContext);
  const [teamList, setList] = useState([]);
  const [newBoard, setBoard] = useState({ name: '', team: '', image: '', color: colors[0] });

  const listHandler = useCallback(() => {
    const teams = user.teams
      .slice(1)
      .map(({ _id, title }) => ({ key: _id, text: title, value: _id }));
    setBoard((prev) => ({ ...prev, team, name }));
    setList(teams);
  }, [user, team, name]);

  const newBoardHandler = ({ target }) =>
    setBoard((prev) => ({ ...prev, [target.name]: target.value }));

  const newBackgroundHandler = (type, clear, data) =>
    setBoard((prev) => ({ ...prev, [type]: data, [clear]: null }));

  const teamHandler = (e, { value }) => setBoard((prev) => ({ ...prev, team: value }));

  const createBoard = useCallback(() => {
    createBoardSocket(newBoard);
    closeModal();
  }, [createBoardSocket, newBoard, closeModal]);

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
        newBackgroundHandler,
      }}
    >
      {children}
    </AddBoardContext.Provider>
  );
};
