import React, { Component } from "react";
import { Box } from "grommet";
import Info from "./Info";
import Reviews from "./Reviews";
import Heading from "./Heading";
import Auth from "./Auth";
import CreateCafe from "./CreateCafe";

class Cafe extends Component {
  state = {
    createCafeOpen: false
  };

  toggleCreateCafe = () => {
    const createCafeOpen = this.state.createCafeOpen ? false : true;
    this.setState({ createCafeOpen });
  };

  render() {
    return (
      <Box flex={false}>
        <Heading
          title={this.props.cafe.properties.name}
          togglePanel={this.props.togglePanel}
        />
        <Box>
          <Info cafe={this.props.cafe} />
        </Box>
        <Box>
          <Reviews
            cafe={this.props.cafe}
            user={this.props.user}
            createReview={this.props.createReview}
            updateReview={this.props.updateReview}
            deleteReview={this.props.deleteReview}
          />
        </Box>
        {/* TODO make User.js component with both Auth and CreateCafe buttons */}
        {this.props.user && (
          <CreateCafe
            createCafe={this.props.createCafe}
            toggleCreateCafe={this.toggleCreateCafe}
            open={this.state.createCafeOpen}
          />
        )}
        <Auth
          user={this.props.user}
          login={this.props.login}
          logout={this.props.logout}
        />
      </Box>
    );
  }
}

export default Cafe;
