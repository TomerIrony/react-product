import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import api from '../utils/api';
import Main from '../components/Main';
import ImagePopup from '../components/ImagePopup';

function Favorites(props) {
  const cardsArray = [];
  const [card, setCard] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardDelete(card) {
    api.removeLike(card._id);
    document.getElementById(card._id).remove();
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        res.forEach((element) => {
          if (element.liked === true) {
            cardsArray.push(element);
          }
        });
      })
      .then(() => {
        setCard(cardsArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function closeAllPopups() {
    setSelectedCard({});
  }

  return (
    <div className="App">
      <Header />
      <Main
        cardDelete={handleCardDelete}
        like={false}
        getCardData={handleCardClick}
        cards={card}
        delete={true}
      />
      <ImagePopup data={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default Favorites;
