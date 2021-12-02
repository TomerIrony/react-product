const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cardsRoutes = require('./routes/cards');
const cardsFavorites = require('./routes/favorites');

mongoose.connect('mongodb://localhost:27017/products', {
  useNewUrlParser: true,
});
mongoose.connection
  .once('open', () => {
    console.log('Connected');
  })
  .on('error', (error) => {
    console.log('Your Error', error);
  });

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', cardsRoutes);
app.use('/', cardsFavorites);
app.use((req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});
app.listen(PORT, () => {});
