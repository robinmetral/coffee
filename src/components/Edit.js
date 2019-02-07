import React from "react"
import PropTypes from "prop-types"

class Edit extends React.Component {

  static propTypes = {
    updateResume: PropTypes.func,
    deleteResume: PropTypes.func,
    index: PropTypes.string,
    resume: PropTypes.shape({
      name: PropTypes.string,
      summary: PropTypes.string,
    })
  }

  handleChange = (event) => {
    // update that resume
    // take a copy of current resume
    const updatedResume = {
      ...this.props.resume,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.updateResume(this.props.index, updatedResume)
  }

  render() {
    const { resume } = this.props
    return (
      <div className="resume-edit">
        <input name="name" onChange={this.handleChange} value={resume.name} type="text" />
        <textarea name="summary" onChange={this.handleChange} value={resume.summary} />
        <button onClick={() => this.props.deleteResume(this.props.index)}>Remove Resume</button>
      </div>
      )
}
}

export default Edit
