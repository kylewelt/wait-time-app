class RestaurantsAdapter {

  constructor () {
    this.url = 'http://localhost:3000/api/v1/restaurants'
    this.submissionUrl = 'http://localhost:3000/api/v1/submissions'
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
            results.push({id: restaurant['id'], name: restaurant['name']})
          }
        })
      })
  }

  randomRestaurants (numResults) {

  }

  popularRestaurants (numResults) {

  }

  getRestaurant (id) {
    return fetch(`${this.url}/${id}`)
      .then(resp => resp.json())
  }

  createSubmission (content) {
    const submissionCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({submission: content})
    }
    return fetch(this.submissionUrl, submissionCreateParams).then(resp => resp.json())
  }

}
