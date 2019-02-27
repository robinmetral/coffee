import React from "react";

import Emoji from "./Emoji";

const Rating = props => (
  <>
    {[...Array(props.rating)].map((star, key) => (
      <Emoji unicode="2b50" alt="Star" key={key} />
    ))}
  </>
);

export default Rating;
