import React, { createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useStoreon } from 'storeon/react';
import io from 'socket.io-client';
import debounce from 'lodash/debounce';

export const SocketContext = createContext({});

export const SocketProvider = ({ children }) => {
  const socket = io('http://localhost:4000');
  const { dispatch } = useStoreon('user');
  const history = useHistory();

  const joinBySocket = (data) => socket.emit('join', data);
  const loginBySocket = (data) => socket.emit('login', data);
  const createBoardSocket = (data) => socket.emit('create_board', data);
  const createTeamSocket = (data) => socket.emit('create_team', data);
  const updateFavourite = debounce((data) => socket.emit('updateFavourite', data), 100, {
    trailing: true,
  });

  socket.on('joined', (data) => {
    dispatch('user/setUser', data);
    history.push(`/${data.userName}/boards`);
  });

  socket.on('login', (data) => {
    dispatch('user/setUser', data);
    history.push(`/${data.userName}/boards`);
  });

  socket.on('created_board', (data) => dispatch('user/create_board', data));
  socket.on('created_team', (data) => dispatch('user/create_team', data));
  socket.on('updatedFavourite', (data) => dispatch('user/updatedFavourite', data));

  return (
    <SocketContext.Provider
      value={{
        joinBySocket,
        loginBySocket,
        createBoardSocket,
        createTeamSocket,
        updateFavourite,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
