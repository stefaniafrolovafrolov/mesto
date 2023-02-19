// Cоздание класса Api, для описания работы логики и обращения к Api
export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res.status)
  }

  // Метод загрузки информации о пользователе с сервера
  async getCurrentUserInfo() {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
    return this._handleResponse(res)
  }

  // Метод загрузки карточек с сервера
  async getInitialCards() {
    const res = await fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
    return this._handleResponse(res)
  }

  // Метод редактирование профиля
  async editUserInfo(data) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
    return this._handleResponse(res)
  }

  // Метод добавления новой карточки
  async addCard(data) {
    const res = await fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    })
    return this._handleResponse(res)
  }

  // Метод удаления карточки
  async deleteCard(cardId) {
    const res = await fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    return this._handleResponse(res)
  }

  // Метод постановки лайка карточки
  async addLike(cardId) {
    const res = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
    return this._handleResponse(res)
  }

  // Метод снятия лайка с карточки
  async deleteLike(cardId) {
    const res = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
    return this._handleResponse(res)
  }

  // Метод обновления аватара пользователя
  async updateUserAvatar(data) {
    const res = await fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    })
    return this._handleResponse(res)
  }
}
