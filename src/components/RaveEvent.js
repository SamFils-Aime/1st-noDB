import React from "react";
import RaveStack from "./RaveStack";
import { Box } from "@material-ui/core";

export default class RaveEvent extends React.Component {
  render() {
    const { data, raveId, updateList } = this.props;
    const mapEvents = data.map((data, index) => {
      return (
        <RaveStack
          raveId={raveId}
          data={data}
          key={index}
          updateList={updateList}
        />
      );
    });
    console.log(mapEvents);
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        overflow="hidden"
      >
        {mapEvents}
      </Box>
    );
  }
}
