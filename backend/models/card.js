const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    required: [true, 'Product Image link'],
  },
  liked: false,
  info: {
    type: String,
    minlength: 2,
    required: true,
  },
});

module.exports = mongoose.model('card', cardSchema);
