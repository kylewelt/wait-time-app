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
      `<img class="ui fluid image" src="${this.data.image ? this.data.image : 'http://media.salon.com/2014/08/guy_fieri.jpg'}">
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
      `<div class="ui padded divided grid">
        <div class="eight wide column">
          <div class="ui container segment">
            <form class="ui form" id="submission" data-id="${this.id}">
              <h2 class="ui dividing header">Visit Information</h2>
              <div class="field">
                <label>Wait Time</label>
                <input type="number" id="wait-time" name="wait-time" min="5" max="420" placeholder="Wait Time (In Minutes)">
              </div>
              <div class="field">
                <label>Meal Time</label>
                <input type="number" id="meal-time" name="meal-time"  min="5" max="420" placeholder="Meal Time (In Minutes)">
              </div>
              <div class="grouped fields" id="day-radios">
                <label>Day of visit:</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" id="sunday" name="day" checked value="Sunday">
                    <label>Sunday</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" id="monday" name="day" value="Monday">
                    <label>Monday</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" id="tuesday" name="day" value="Tuesday">
                    <label>Tuesday</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" id="wednesday" name="day"  value="Wednesday">
                    <label>Wednesday</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" id="thursday" name="day" value="Thursday">
                    <label>Thursday</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" id="friday" name="day" value="Friday">
                    <label>Friday</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" id="saturday" name="day" value="Saturday">
                    <label>Saturday</label>
                  </div>
                </div>
              </div>
              <div class="field">
                <label>Time Visited</label>
                <input type="time" id="time-visited" name="time-visited" placeholder="Time">
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

  renderSubmissions() {
    return this.submissions.render(this.data.submissions)
  }

  render () {
    this.restaurantContainer.innerHTML = this.renderHeader() + this.renderForm() + this.renderSubmissions()
  }

}
