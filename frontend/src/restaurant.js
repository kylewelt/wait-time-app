class Restaurant {

  constructor (id) {
    this.id = id
    this.restaurantsAdapter = new RestaurantsAdapter()
    this.submissions = new Submissions()
    this.restaurantContainer = document.getElementById('restaurant-container')
    this.data = {}
  }

  displayRestaurant () {
    return this.restaurantsAdapter.getRestaurant(this.id)
      .then(json => this.data = json)
      .then(this.render.bind(this))
  }

  renderHeader () {
    return (
      `<img id="main-img" class="ui fluid image" src="${this.data.image ? this.data.image : 'http://media.salon.com/2014/08/guy_fieri.jpg'}">
      <div class="ui padded divided grid">
        <div class="eight wide column">
          <h1 class="ui title-header">${this.data.name}</h1>
          <h5 class="ui title-header">${this.data.address}</h5>
          <h5 class="ui title-header">${this.data.locality}</h5>
        </div>
        <div class="eight wide column">
          <h1 class="ui title-header">${this.data.user_rating} / 5</h1>
          <h5 class="ui title-header">$${this.data.average_cost_for_two} for two</h5>
        </div>
      </div>`
    )
  }

  renderForm () {
    return (
      `<div class="ui padded divided grid" id="new-submission-container">
        <div class="eight wide column">
          <div class="ui container segment" id="new-submission">
            <form class="ui form" id="submission" data-id="${this.id}">
              <h2 class="ui dividing header">Visit Information</h2>
              <div class="field">
                <label>Wait Time</label>
                <input type="number" id="wait-time" name="wait-time" min="5" max="420" placeholder="Wait Time (In Minutes)">
              </div>
              <div class="field">
                <label>Meal Duration</label>
                <input type="number" id="meal-time" name="meal-time"  min="5" max="420" placeholder="Duration (In Minutes)">
              </div>
              <div class="field">
                <label>Day of Visit</label>
                <select class="ui fluid dropdown" id="day">
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>
              </div>
              <div class="field">
                <label>Time Visited</label>
                <input type="time" id="time-visited" name="time-visited" value="${`${(new Date()).getHours()}:${(new Date).getMinutes()}`}">
              </div>
              <div class="field">
                <label>Rating</label>
                <input type="number" id="rating" name="rating" min="1" max="5" placeholder="Rating">
              </div>
              <div class="field">
                <label>Comments</label>
                <textarea id="comments" name="comments" rows="2"></textarea>
              </div>
              <button class="ui button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>`
    )
  }

  renderSubmissions () {
    return this.submissions.render(this.data.submissions)
  }

  renderUserSubmission (submission) {
    return (
      `<h5>${submission.day} at ${(new Date(submission.time)).toTimeString()}</h5>
      <p>Your rating: ${submission.rating}</p>
      <p>You waited ${submission.wait_time} minutes for a ${submission.meal_time} minute meal. Great job!</p>
      <p>Here's what you thought just now: ${submission.comments}</p>`
    )
  }

  render () {
    this.restaurantContainer.innerHTML = this.renderHeader() + this.renderForm() + this.renderSubmissions()
  }

}
