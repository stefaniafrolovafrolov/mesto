export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  addItem = (item) => {
    this._container.prepend(item)
  }

  renderItems(items) {
    items.reverse().forEach((item) => {
      return this._renderer(item)
    })
  }
}
