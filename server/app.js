import express from 'express';
import cors from 'cors';
import { productsData, categoriesData,
         productsCartData, productsOrderData } from './data.js';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('server started');
});

app.get('/api/categories', (request, response) => {
  response.send(JSON.stringify({
    data:{
      categoriesData
    }
  }));
});

app.get('/api/categories/:id', (request, response) => {
  const categoryId = parseInt(request.params.id);
  const productsCategoryData = productsData.filter(item => item.categoryId === categoryId);

  response.send(JSON.stringify({
    data:{
      productsCategoryData,
    }
  }));
});

app.get('/api/products', (request, response) => {
  response.send(JSON.stringify({
    data: productsData,
  }));
});

app.get('/api/products/:id', (request, response) => {
  const productId = parseInt(request.params.id);
  const productOneData = productsData.find(item => item.id === productId);

  response.send(JSON.stringify({
    data: productOneData,
  }));
});

app.get('/api/products-cart', (request, response) => {
  response.send(JSON.stringify({
    data: productsCartData,
  }));
});

app.post('/api/products-cart', (request, response) => {
  const productCart = request.body.productCart;

  const index = productsCartData.length;
  productsCartData.splice(index, 0, productCart);

  response.send(JSON.stringify({
    data: productsCartData,
  }));
});

app.delete('/api/del-product-cart/:id', (request, response) => {
  const productId = parseInt(request.params.id);

  const index = productsCartData.findIndex(item => item.id === productId);
  productsCartData.splice(index, 1);

  response.send(JSON.stringify({
    data: productsCartData,
  }));
});

app.delete('/api/clean-products-cart', (request, response) => {
  productsCartData.splice(0);

  response.send(JSON.stringify({
    data: productsCartData,
  }));
});

app.put('/api/product-cart', (request, response) => {
  const productCart = request.body.productCart;

  const index = productsCartData.findIndex(item => item.id === productCart.id);
  productsCartData.splice(index, 1, productCart);

  response.send(JSON.stringify({
    data: productsCartData,
  }));
});

app.post('/api/products-checkout', (request, response) => {
  const productsCheckout = request.body.productsCheckout;

  productsOrderData.splice(0, 0, ...productsCheckout);

  response.send(JSON.stringify({
    data: productsOrderData,
  }));
});

app.get('/api/products-order', (request, response) => {
  response.send(JSON.stringify({
    data: productsOrderData,
  }));
});