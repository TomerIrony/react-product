class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getFavoriteCard() {
    return fetch(`${this._url}/cards/favorites`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getCardById(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  createCard(name, link, info) {
    return fetch(`${this._url}/cards/`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
        info,
      }),
    }).then(this._checkResponse);
  }

  cardLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  removeLike(cardId) {
    return fetch(`${this._url}/cards/remove/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
