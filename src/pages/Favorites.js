import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import api from '../utils/api';
import Main from '../components/Main';
import ImagePopup from '../components/ImagePopup';

function Favorites(props) {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  React.useEffect(() => {
    api
      .getFavoriteCard()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function closeAllPopups() {
    setSelectedCard({});
  }
  function handleCardDelete(card) {
    const deleteId = card._id;
    const newCardArr = [];
    api.createCard(card.name, card.link);
    api
      .deleteFavoriteCard(card._id)
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
  return (
    <div className="App">
      <Header />
      <Main
        like={false}
        getCardData={handleCardClick}
        cards={cards}
        setCards={setCards}
        delete={true}
        cardDelete={handleCardDelete}
      />
      <ImagePopup data={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default Favorites;
