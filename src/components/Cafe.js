import React from "react";
import { Box } from "grommet";
import Info from "./Info";
import Reviews from "./Reviews";
import Heading from "./Heading";
import Auth from "./Auth";
import CreateCafe from "./CreateCafe";

const Cafe = props => {
  return (
    <Box flex={false}>
      <Heading
        title={props.cafe.properties.name}
        togglePanel={props.togglePanel}
      />
      <Box>
        <Info cafe={props.cafe} />
      </Box>
      <Box>
        <Reviews
          cafe={props.cafe}
          user={props.user}
          createReview={props.createReview}
          updateReview={props.updateReview}
          deleteReview={props.deleteReview}
        />
      </Box>
      {props.user && (
        <CreateCafe
          createCafe={props.createCafe}
          toggleCreateCafe={props.toggleCreateCafe}
          open={props.createCafeOpen}
        />
      )}
      <Auth user={props.user} login={props.login} logout={props.logout} />
    </Box>
  );
};

export default Cafe;
