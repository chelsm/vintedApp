import express, { Request, Response } from 'express';
import indexRouter from './controllers/index'
import productsRouter from './controllers/products/product-controller'
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter)
app.use('/products', productsRouter)
app.use('/products/:id', productsRouter)
const port = 3000;

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});