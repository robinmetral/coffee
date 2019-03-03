import React from "react";
import { Tooltip as LeafletTooltip } from "react-leaflet";
import styled from "styled-components";

import Rating from "./Rating";

const Name = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const Tooltip = props => (
  <LeafletTooltip direction="top">
    <Name>{props.name}</Name>
    <br />
    <Rating rating={props.rating} />
  </LeafletTooltip>
);

export default Tooltip;
