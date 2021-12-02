const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((card) => res.status(200).send(card))
    .catch(() => {
      res.status(500).send({ message: 'Error' });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link })
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.deleteCardById = (req, res) => {
  Card.findByIdAndDelete({ _id: req.params.cardId })
    .then(() => {
      res.send({ message: `Card ${req.params.id} has been deleted` });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
