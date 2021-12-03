import React from 'react';
import Card from './Card';

function Main(props) {
  return (
    <main>
      <section className="elements">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            getCard={props.getLikedCard}
            fetchData={props.getCardData}
            like={props.like}
            delete={props.delete}
            cardDelete={props.cardDelete}
            likeHandle={props.cardLikeHandle}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
