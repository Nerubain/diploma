import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import bodyParser from 'body-parser';
import cors from 'cors';
import aliases from 'module-alias/register';

import { joinUser, loginUser, addBoard } from '@controllers';
import mongooseConnection from './mongoose';

const app = express();
const port = 4000;
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: 'http://localhost:4000' }));

// app.use('/', authRouter);
// app.use('/', teamsRouter);

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(port, () => {
  console.log('Hello World!');
  mongooseConnection();
});

const users = {};

io.on('connection', socket => {
  socket.on('login', async data => await loginUser(data, socket));
  socket.on('join', async data => await joinUser(data, socket));
  socket.on('create_board', async data => await addBoard(data, socket));
  // socket.on('image', data => uploadImage(data));
});
