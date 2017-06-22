class Submissions {

  constructor () {
    this.submissions = []
  }

  renderSubmission (array) {
    array.forEach(submission => this.submissions.push(new Submission(submission)))
  }

  renderComments () {

    return (
      `<div class="ui padded grid">
        <div class="sixteen wide column">
          <h3 class="ui dividing header">Comments</h3>
          ${this.submissions.map(function (submission) {
            return (
              `<div class="ui raised segment">
                <div class="comment">
                  <div class="content">
                    <div class="metadata">
                      <span class="date">${submission.day + ' at ' + new Date(submission.time).toTimeString()}</span>
                    </div>
                    <div class="text">
                      ${submission.comments}
                    </div>
                  </div>
                </div>
              </div>`
            )
          }).join('')}
        </div>
      </div>`
    )
  }

  render(submissions) {
    this.renderSubmission(submissions)
    return this.renderComments()
  }

}
