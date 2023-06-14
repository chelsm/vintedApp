import express, { Request, Response } from 'express';
import indexRouter from './controllers/index'
import userRouter from './controllers/orders/order-controller'
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter)
app.use('/orders', userRouter)
app.use('/orders/:id', userRouter)
const port = 3002;

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});