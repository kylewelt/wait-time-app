class Restaurant {

  constructor (id) {
    this.id = id
    this.restaurantsAdapter = new RestaurantsAdapter()
    this.restaurantContainer = document.getElementById('restaurant-container')
  }

  displayRestaurant () {
    this.data = []
    return this.restaurantsAdapter.getRestaurant(this.id)
      .then(json => this.data.push(json))
      .then(this.render.bind(this))
  }

  render () {
    this.restaurantContainer.innerHTML = this.data[0].name
  }

}
