class App {

  constructor () {
    this.restaurants = new Restaurants()
    this.searchContainer = document.getElementById('search-container')
    this.searchContainer.addEventListener('click', function (e) {
      if (e.target && e.target.matches('a.result')) {
        console.log(e.target.dataset.id)
        this.restaurant = new Restaurant(e.target.dataset.id)
        this.restaurant.displayRestaurant()
        this.innerHTML = ''
      }
    })
  }

  render () {
  }

}
