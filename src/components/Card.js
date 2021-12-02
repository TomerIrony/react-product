import React from 'react';

function Card(props) {
  return (
    <article className="card">
      <button
        type="button"
        aria-label="close card"
        className={props.delete ? 'card__close' : 'card__close_hide'}
        id="cardClose"
        onClick={() => props.onCardDelete(props.card)}
      ></button>
      <img
        onClick={() => {
          props.fetchData(props.card);
        }}
        id="cardImage"
        src={props.card.link}
        alt={props.card.name}
        className="card__image"
      />
      <div className="card__caption">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__group">
          <button
            onClick={() => {
              props.getCard(props.card);
            }}
            type="button"
            className={props.like ? 'card__like-btn' : 'card__like-btn-hidden'}
            aria-label="like button"
          ></button>
        </div>
      </div>
    </article>
  );
}
export default Card;
