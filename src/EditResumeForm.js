import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {

  static propTypes = {
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    index: PropTypes.string,
    fish: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
      image: PropTypes.string
    })
  }

  handleChange = (event) => {
    // update that fish
    // take a copy of current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    const { fish } = this.props;
    return (
      <div className="fish-edit">
        <input name="name" onChange={this.handleChange} value={fish.name} type="text" />
        <input name="price" onChange={this.handleChange} value={fish.price} type="text" />
        <select name="status" onChange={this.handleChange} value={fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={fish.desc} />
        <input name="image" onChange={this.handleChange} value={fish.image} type="text" />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
      );
}
}

export default EditFishForm;
