class RestaurantsAdapter {

  constructor () {
    this.url = 'http://localhost:3000/api/v1/restaurants'
  }

  getRestaurants () {
    return fetch(this.url)
      .then(resp => resp.json())
  }

  loadAllRestaurants (results, keyword) {
    return this.getRestaurants()
      .then(json => {
        json.forEach(restaurant => {
          if (restaurant['name'].toLowerCase().includes(keyword.toLowerCase())) {
            results.push(restaurant['name'])
          }
        })
      })
  }

  randomRestaurants (numResults) {

  }

  popularRestaurants (numResults) {

  }

  getRestaurant () {

  }

}
