const router = require('express').Router();

const {
  getCards,
  createCard,
  likeCard,
  removeLike,
  findCard,
} = require('../controllers/cards');

router.get('/cards', getCards);
router.post('/cards/', createCard);
router.put('/cards/likes/:cardId', likeCard);
router.put('/cards/remove/:cardId', removeLike);
router.get('/cards/:cardId', findCard);
module.exports = router;
