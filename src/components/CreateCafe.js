import React, { Component } from "react";
import { Heading, Box, Form, TextInput, Button, Layer } from "grommet";
import { Send } from "grommet-icons";
import { ThemeContext } from "../themecontext/ThemeContext";

class CreateCafe extends Component {
  state = {
    nodeId: ""
  };

  // TODO pull branch info from OSM
  // TODO method to update all cafes once a day
  handleSubmit = async e => {
    e.preventDefault();
    const { nodeId } = this.state;
    // fetch OSM data via an Overpass API query
    let response = await fetch(
      `https://www.overpass-api.de/api/interpreter?data=[out:json];node(${nodeId});out;`
    );
    let json = await response.json();
    // initialize GeoJSON object
    const cafe = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: []
      },
      properties: {}
    };
    // destructure
    let node = json.elements[0];
    let { tags } = node;
    let { geometry, properties } = cafe;
    // populate with pulled data
    geometry.coordinates = [node.lat, node.lon];
    properties.nodeId = nodeId;
    properties.createdAt = Date.now();
    if (tags.name) {
      properties.name = tags.name;
    }
    if (tags["addr:city"]) {
      properties.addrCity = tags["addr:city"];
    }
    if (tags["addr:postcode"]) {
      properties.addrPostcode = tags["addr:postcode"];
    }
    if (tags["addr:street"]) {
      properties.addrStreet = tags["addr:street"];
    }
    if (tags["addr:housenumber"]) {
      properties.addrHousenumber = tags["addr:housenumber"];
    }
    if (tags.internet_access) {
      if (tags.internet_access === "wlan" || tags.internet_access === "yes") {
        properties.internetAccess = true;
      } else if (tags.internet_access === "no") {
        properties.internetAccess = false;
      }
    }
    if (tags.opening_hours) {
      properties.openingHours = tags.opening_hours;
    }
    if (tags.website) {
      properties.url = tags.website;
    } else if (tags.facebook) {
      properties.url = tags.facebook;
    }
    if (
      tags["drink:espresso"] === "served" ||
      tags["drink:espresso"] === "yes"
    ) {
      properties.servesEspresso = true;
    } else if (tags["drink:espresso"] === "no") {
      properties.servesEspresso = false;
    }
    if (
      tags["drink:filter_coffee"] === "served" ||
      tags["drink:filter_coffee"] === "yes"
    ) {
      properties.servesFilter = true;
    } else if (tags["drink:filter_coffee"] === "no") {
      properties.servesFilter = false;
    }
    if (tags.microroasting === "yes") {
      properties.microroasting = true;
    }
    // create cafe
    this.props.createCafe(cafe);
    // reset form state
    this.setState({ nodeId: "" });
    // close layer
    this.props.toggleCreateCafe();
  };

  render() {
    return (
      <ThemeContext.Extend
        value={{
          layer: {
            zIndex: "1100",
            container: {
              zIndex: "1100"
            }
          }
        }}
      >
        <Layer
          onEsc={() => this.props.toggleCreateCafe()}
          onClickOutside={() => this.props.toggleCreateCafe()}
        >
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              Add a cafe
            </Heading>
            <Form onSubmit={this.handleSubmit}>
              <TextInput
                type="number"
                value={this.state.nodeId}
                placeholder="OpenStreetMap ID"
                onChange={e => this.setState({ nodeId: e.target.value })}
              />
              <Button icon={<Send />} type="submit" primary label="Submit" />
            </Form>
          </Box>
        </Layer>
      </ThemeContext.Extend>
    );
  }
}

export default CreateCafe;
