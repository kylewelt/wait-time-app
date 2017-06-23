class Restaurants {
  constructor () {
    this.restaurantName = document.getElementById('restaurant-name')
    this.restaurantName.addEventListener('keyup', _.debounce(event => this.search(), 250))
    this.restaurantsAdapter = new RestaurantsAdapter()
    this.restaurantsNode = document.getElementById('restaurants')
  }

  search () {
    $('body').append(
      `<div class="ui" id="loader">
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Guy Fieri is searching...</div>
        </div>
      </div>`)
    this.restaurants = []
    var keyword = this.restaurantName.value
    this.restaurantsAdapter.loadAllRestaurants(this.restaurants, keyword)
    .then(this.render.bind(this))
  }

  displayResults () {
    if (this.restaurantName.value === '') {
      $('#loader').remove()
      this.restaurantsNode.className = 'results transition'
    } else {
      $('#loader').remove()
      this.restaurantsNode.className = 'results transition visible'
    }

    let results = this.restaurants.map(function (restaurant) {
      return `<a class="result" data-id="${restaurant['id']}">${restaurant['name']}</a>`
    }).join('')

    if (results.length > 0) {
      return results
    } else {
      return (
        `<div class="ui message">
          <p>No matching restaurants were found. Please try your search again.</p>
        </div>`
      )
    }
  }

  render () {
    this.restaurantsNode.innerHTML = this.displayResults()
  }
}
