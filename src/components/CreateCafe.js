import React, { Component } from "react";
import { Form, FormField, TextInput, Button } from "grommet";

class CreateCafe extends Component {
  nodeIdRef = React.createRef();

  handleSubmit = async e => {
    e.preventDefault();
    const nodeId = this.nodeIdRef.current.value;
    // fetch OSM data vie an Overpass API query
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
      if (tags.internet_access === ("wlan" | "yes")) {
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
    if (tags["drink:espresso"] === ("served" | "yes")) {
      properties.servesEspresso = true;
    } else if (tags["drink:espresso"] === "no") {
      properties.servesEspresso = false;
    }
    if (tags["drink:filter_coffee"] === ("served" | "yes")) {
      properties.servesFilter = true;
    } else if (tags["drink:filter_coffee"] === "no") {
      properties.servesFilter = false;
    }
    if (tags.microroasting === "yes") {
      properties.microroasting = true;
    }
    // create cafe
    this.props.createCafe(cafe);
    // reset form
    e.target.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField label="OpenStreetMap ID">
          <TextInput
            type="number"
            placeholder="OpenStreetMap ID"
            ref={this.nodeIdRef}
          />
        </FormField>
        <Button type="submit" primary label="Submit" />
      </Form>
    );
  }
}

export default CreateCafe;
