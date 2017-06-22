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
      this.submission = new Submission()
      this.restaurantsAdapter = new RestaurantsAdapter()
      if (e.target && e.target.matches('#submission')) {
        e.preventDefault()
        var selected = ''
        this.submission.restaurant_id = e.target.dataset.id
        this.submission.wait_time = document.getElementById('wait-time').value
        this.submission.meal_time = document.getElementById('meal-time').value
        this.submission.time = document.getElementById('time-visited').value
        this.submission.rating = document.getElementById('rating').value
        this.submission.comments = document.getElementById('comments').value
        document.getElementsByName('day').forEach(function (day) {
          if (day.checked) {
            selected = day.value
          }
        })
        this.restaurant = new Restaurant(this.submission.restaurant_id)
        this.submission.day = selected
        this.restaurantsAdapter.createSubmission(this.submission)
        // 1. remove form
        // 2. re-render submissions with new submission
        // this.restaurant.renderSubmissions()
      }
    })
  }

  render () {
  }

}
