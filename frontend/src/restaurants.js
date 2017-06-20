class Restaurants {
  constructor () {
    this.searchRestaurants = document.getElementById('search-restaurants')
    this.restaurantName = document.getElementById('restaurant-name')
    this.searchRestaurants.addEventListener('keyup', event => this.search())
    this.restaurantsAdapter = new RestaurantsAdapter()
    this.restaurantsNode = document.getElementById('restaurants')
  }

  search () {
    this.restaurants = []
    var keyword = this.restaurantName.value
    this.restaurantsAdapter.loadAllRestaurants(this.restaurants, keyword)
    .then(this.render.bind(this))
    this.render()
  }

  render () {
    console.log(this.restaurants)
    this.restaurantsNode.innerHTML = `<p>${this.restaurants.join('</p><p>')}</p>`
  }
}
