import express, { Request, Response } from 'express';
import indexRouter from './controllers/index'
import userRouter from './controllers/users/user-controller'
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/users/:id', userRouter)
const port = 3000;

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});