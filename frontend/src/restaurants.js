class Restaurants {
  constructor () {
    this.restaurantName = document.getElementById('restaurant-name')
    this.restaurantName.addEventListener('keyup', _.debounce(event => this.search(), 250))
    this.restaurantsAdapter = new RestaurantsAdapter()
    this.restaurantsNode = document.getElementById('restaurants')
    this.restaurantsNode.addEventListener('click', function (e) {
      if (e.target && e.target.matches('a.result')) {
        console.log(e.target.dataset.id)
      }
    })
  }

  search () {
    this.restaurants = []
    var keyword = this.restaurantName.value
    this.restaurantsAdapter.loadAllRestaurants(this.restaurants, keyword)
    .then(this.render.bind(this))
  }

  displayResults () {
    this.restaurantsNode.className = 'results transition visible'
    return (
      this.restaurants.map(function (restaurant) {
        return `<a class="result" data-id="${restaurant['id']}">${restaurant['name']}</a>`
      }).join('')
    )
  }

  render () {
    this.restaurantsNode.innerHTML = this.displayResults()
  }
}
