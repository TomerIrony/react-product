const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((card) => res.status(200).send(card))
    .catch(() => {
      res.status(500).send({ message: 'Error' });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { liked: true },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports.removeLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { liked: false },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports.findCard = (req, res) => {
  Card.findById(req.params.cardId)
    .then((card) => res.status(200).send(card))
    .catch(() => {
      res.status(500).send({ message: 'Error' });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link, info } = req.body;

  Card.create({ name, link, info })
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
