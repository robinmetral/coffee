import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {

  static propTypes = {
    addFish: PropTypes.func
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    // stop form from submitting
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    }
    this.props.addFish(fish);
    // refresh form
    event.currentTarget.reset(); // event.currentTarget is the <form>
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish} >
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="description" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image URL" />
        <button type="submit">+ Add Fish</button>
      </form>
      );
  }
}

export default AddFishForm;
