import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import bodyParser from 'body-parser';
import cors from 'cors';
import aliases from 'module-alias/register';

import { authRouter, teamsRouter } from '@routes';
import mongooseConnection from './mongoose';

const app = express();
const port = 4000;
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: 'http://localhost:4000' }));

app.use('/', authRouter);
app.use('/', teamsRouter);

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(port, () => {
  console.log('Hello World!');
  mongooseConnection();
});

const users = {};

io.on('connection', client => {
  client.on('click', user => {
    client.user = user;
    console.log(client.user);
  });
  client.on('disconnect', () => {
    // console.log(`user: ${client.user.name} disconnected`);
  });
  // console.log('asd');
  // socket.emit('create_id', 'id');
  // socket.join('room1');
});
