const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('favorite', favoriteSchema);
