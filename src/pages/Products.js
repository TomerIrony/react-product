import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import ImagePopup from '../components/ImagePopup';
import api from '../utils/api';

function Products() {
  const [selectedCard, setSelectedCard] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const deleteId = card._id;
    const newCardArr = [];
    api.likeCard(card.name, card.link);
    api
      .deleteCard(card._id)
      .then(() => {
        cards.filter((card) => {
          if (!(card._id == deleteId)) {
            newCardArr.push(card);
          }
        });
      })
      .then(() => {
        setCards(newCardArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setSelectedCard({});
  }

  return (
    <div className="App">
      <div className="root__content">
        <Header />

        <Main
          getCardData={handleCardClick}
          getLikedCard={handleCardLike}
          cards={cards}
          setCards={setCards}
          like={true}
          delete={false}
        />
        <Footer />
        <ImagePopup data={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default Products;
