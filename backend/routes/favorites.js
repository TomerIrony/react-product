const router = require('express').Router();

const {
  createFavorite,
  getFavorite,
  deleteFavoriteCard,
} = require('../controllers/favorites');

router.get('/cards/favorites', getFavorite);
router.post('/cards/favorites', createFavorite);
router.delete('/cards/favorites/:cardId', deleteFavoriteCard);

module.exports = router;
