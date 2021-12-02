const Favorite = require('../models/favorite');

module.exports.getFavorite = (req, res) => {
  Favorite.find({})
    .then((card) => res.status(200).send(card))
    .catch(() => {
      res.status(500).send({ message: 'Error' });
    });
};

module.exports.createFavorite = (req, res) => {
  const { name, link } = req.body;

  Favorite.create({ name, link })
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.deleteFavoriteCard = (req, res) => {
  Favorite.findByIdAndDelete({ _id: req.params.cardId })
    .then(() => {
      res.send({ message: `Card ${req.params.id} has been deleted` });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
