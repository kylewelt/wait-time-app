class Restaurants {
  constructor () {
    this.restaurantName = document.getElementById('restaurant-name')
    this.restaurantName.addEventListener('keyup', _.debounce(event => this.search(), 250))
    this.restaurantsAdapter = new RestaurantsAdapter()
    this.restaurantsNode = document.getElementById('restaurants')
  }

  search () {
    this.restaurants = []
    var keyword = this.restaurantName.value
    this.restaurantsAdapter.loadAllRestaurants(this.restaurants, keyword)
    .then(this.render.bind(this))
  }

  render () {
    // console.log(this.restaurants)
    this.restaurantsNode.innerHTML = `<a class="result">${this.restaurants.join('</a><a class="result">')}</a>`
    this.restaurantsNode.className = 'results transition visible'
  }
}
