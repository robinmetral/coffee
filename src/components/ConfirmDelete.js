import React from "react";
import { Layer, Box, Heading, Text, Button } from "grommet";
import { ThemeContext } from "grommet/contexts";
import { Close, Trash } from "grommet-icons";

const ConfirmDelete = props => (
  <ThemeContext.Extend
    value={{
      layer: {
        container: {
          zIndex: "1100"
        },
        zIndex: "1100"
      }
    }}
  >
    <Layer
      position="center"
      modal
      onEsc={props.closeConfirmDelete}
      onClickOutside={props.closeConfirmDelete}
    >
      <Box pad="medium" gap="small" width="medium">
        <Heading level={3} margin="none">
          Whoops...
        </Heading>
        <Text>{props.message}</Text>
        <Box direction="row" justify="center" gap="small">
          <Button
            icon={<Close />}
            label="Cancel"
            onClick={props.closeConfirmDelete}
          />
          <Button
            icon={<Trash />}
            label={
              <Text color="white">
                <strong>Delete</strong>
              </Text>
            }
            onClick={props.handleDelete}
            primary
            color="status-critical"
          />
        </Box>
      </Box>
    </Layer>
  </ThemeContext.Extend>
);

export default ConfirmDelete;
