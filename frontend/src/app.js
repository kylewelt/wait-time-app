class App {

  constructor () {
    this.restaurants = new Restaurants()
    this.searchContainer = document.getElementById('search-container')
    this.restaurantContainer = document.getElementById('restaurant-container')
    this.searchContainer.addEventListener('click', function (e) {
      if (e.target && e.target.matches('a.result')) {
        console.log(e.target.dataset.id)
        this.restaurant = new Restaurant(e.target.dataset.id)
        this.restaurant.displayRestaurant()
        this.innerHTML = ''
      }
    })
    this.restaurantContainer.addEventListener('submit', function (e) {
      this.restaurantsAdapter = new RestaurantsAdapter()
      if (e.target && e.target.matches('#submission')) {
        e.preventDefault()

        var d = new Date()
        var t = document.getElementById('time-visited').value.split(':')
        d.setHours(t[0])
        d.setMinutes(t[1])

        var data = {
          restaurant_id: e.target.dataset.id,
          wait_time: document.getElementById('wait-time').value,
          meal_time: document.getElementById('meal-time').value,
          day: document.getElementById('day').value,
          time: d,
          rating: document.getElementById('rating').value,
          comments: document.getElementById('comments').value
        }

        if (Object.values(data).some(value => value === '')) {
          alert('Please fill in all fields.')
          throw 'bad submission'
        }

        this.submission = new Submission(data)
        this.restaurant = new Restaurant(this.submission.restaurant_id)
        this.restaurantsAdapter.createSubmission(this.submission)
        this.newSubmission = document.getElementById('new-submission')
        $('#new-submission-container').transition('scale')
        this.newSubmission.innerHTML = this.restaurant.renderUserSubmission(this.submission)
        $('#new-submission-container').transition('scale')
      }
    })
  }

  render () {
  }

}
