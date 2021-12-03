import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ImagePopup from '../components/ImagePopup';
import api from '../utils/api';

function Products(props) {
  const cardsArray = [];
  const [card, setCard] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        res.forEach((element) => {
          if (element.liked === false) {
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

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleLike(card) {
    api.cardLike(card._id);
    document.getElementById(card._id).remove();
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
          cardLikeHandle={handleLike}
          cards={card}
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
