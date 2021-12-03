import React from 'react';
import { useLocation } from 'react-router-dom';
import api from '../utils/api';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Item(props) {
  const [cardD, setCardD] = React.useState([]);
  const location = useLocation();
  let card = '';

  if (location.state !== null) {
    card = location.state.card;
  }

  api.getCardById(card).then((res) => setCardD(res));

  return (
    <div>
      <Header />
      <div className="item">
        <img className="item__image" src={cardD.link} />
        <p className="item__info">{cardD.info}</p>
      </div>

      <Footer />
    </div>
  );
}

export default Item;
