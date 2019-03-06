import React from "react";
import { Layer, Box } from "grommet";
import Cafe from "./Cafe";
import Welcome from "./Welcome";
import { ThemeContext } from "../themecontext/ThemeContext";

const Panel = (props) => {
    if (!props.open) return null;
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
          onEsc={props.togglePanel}
        >
          <Box
            width="medium"
            elevation="large"
            fill="vertical"
            overflow="auto"
            pad={{ horizontal: "medium" }}
          >
            {props.cafe ? (
              <Cafe
                cafe={props.cafe}
                user={props.user}
                createReview={props.createReview}
                updateReview={props.updateReview}
                deleteReview={props.deleteReview}
                togglePanel={props.togglePanel}
                login={props.login}
                logout={props.logout}
                createCafe={props.createCafe}
              />
            ) : (
              <Welcome togglePanel={props.togglePanel} />
            )}
          </Box>
        </Layer>
      </ThemeContext.Extend>
    );
  }

export default Panel;
