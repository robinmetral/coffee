import React, { Component } from "react"
import PropTypes from "prop-types"

class AddResumeForm extends Component {

  static propTypes = {
    addResume: PropTypes.func
  }

  nameRef = React.createRef()
  summaryRef = React.createRef()

  createResume = event => {
    // prevent form from submitting
    event.preventDefault()
    // pull values from form into object
    const resume = {
      name: this.nameRef.current.value,
      summary: this.summaryRef.current.value,
    }
    // call addResume function
    this.props.addResume(resume)
    // reset form
    event.currentTarget.reset()
  }

  render() {
    return (
      <form onSubmit={this.createResume} >
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <textarea name="summary" ref={this.summaryRef} placeholder="Summary" />
        <button type="submit">Add Resume</button>
      </form>
      )
  }
}

export default AddResumeForm
