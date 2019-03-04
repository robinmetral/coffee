import React, { Component } from "react";
import { ThemeContext, Layer, Box, Button } from "grommet";
import { Add } from "grommet-icons";
import Cafe from "./Cafe";
import CreateCafe from "./CreateCafe";
import Login from "./Login";

class Panel extends Component {
  render() {
    if (!this.props.open) return null;
    return (
      <ThemeContext.Extend
        value={{
          layer: {
            container: {
              zIndex: "1000"
            }
          }
        }}
      >
        <Layer
          position="right"
          full="vertical"
          modal={false}
          onEsc={this.props.togglePanel}
        >
          <Box
            width="medium"
            elevation="large"
            fill="vertical"
            overflow="auto"
            pad={{ horizontal: "medium" }}
          >
            <Cafe
              cafe={this.props.cafe}
              user={this.props.user}
              createReview={this.props.createReview}
              updateReview={this.props.updateReview}
              deleteReview={this.props.deleteReview}
              togglePanel={this.props.togglePanel}
            />
            <CreateCafe createCafe={this.props.createCafe} />
            <Login login={this.props.login} />
            <Button
              icon={<Add />}
              onClick={() => this.props.toggleCreateCafe()}
              label="Add a cafe"
            />
          </Box>
        </Layer>
      </ThemeContext.Extend>
    );
  }
}

export default Panel;
