import React, { Component } from "react"
import PropTypes from "prop-types"

class AddResumeForm extends Component {

  static propTypes = {
    addResume: PropTypes.func
  }

  nameRef = React.createRef()
  summaryRef = React.createRef()

  createResume = (event) => {
    event.preventDefault()
    const resume = {
      name: this.nameRef.current.value,
      summary: this.summaryRef.current.value,
    }
    this.props.addResume(resume)
    // refresh form
    event.currentTarget.reset() // event.currentTarget is the <form>
  }

  render() {
    return (
      <form onSubmit={this.createResume} >
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <textarea name="summary" ref={this.summaryRef} placeholder="Summary" />
        <button type="submit">Add Resume !</button>
      </form>
      )
  }
}

export default AddResumeForm
