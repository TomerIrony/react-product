import React from 'react';
import { Link } from 'react-router-dom';

function ImagePopup(props) {
  const id = props.data._id;
  return (
    <div
      className={`popout ${
        Object.keys(props.data).length === 0 ? '' : `popout_opened`
      }`}
      id="imageOpened"
    >
      <div className="popout__images">
        <button
          type="button"
          className="popout__close-btn"
          id="popoutImageCloseButton"
          onClick={props.onClose}
        ></button>
        <img
          id="popoutImage"
          src={props.data.link}
          alt={props.data.name}
          className="popout__image"
        />
        <h2 id="popoutImageCaption" className="popout__caption">
          <Link
            className="navbar__link"
            to={`/item/${id}`}
            state={{ card: id }}
          >
            Click here to get a desciprtion
          </Link>
        </h2>
      </div>
    </div>
  );
}
export default ImagePopup;
