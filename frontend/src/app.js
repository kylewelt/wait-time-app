class App {
  constructor () {
    this.searchRestaurants = document.getElementById('search-restaurants')
    this.restaurantName = document.getElementById('restaurant-name')
    this.searchRestaurants.addEventListener('submit', event => this.search(restaurantName.value).bind(this))
  }

  search (keyword) {
    event.preventDefault()
    Zomato.searchByRestaurant(keyword, function(results) {
      document.getElementById('restaurant-info').innerHTML = '<h2>Search Results:</h2>' +
        results.restaurants.map(result => {
          return `<p>${result.restaurant.name} - ${result.restaurant.location.address}</p>`
        }).join('')
    }, function (error) {
      alert(error)
    })
  }

  render () {

  }
}
