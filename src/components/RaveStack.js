import React from "react";
import axios from "axios";
import UpdateEvent from "./UpdateEvent";
import { Paper, Box, Button } from "@material-ui/core";

export default class RaveStack extends React.Component {
  constructor() {
    super();
    this.state = {
      togg: false
    };
  }

  toggleExpand = () => {
    this.setState({ togg: !this.state.togg });
  };

  clickDelete = () => {
    axios
      .delete(`/api/riot/${this.props.data.id}`)
      .then(res => this.props.updateList(res.data))
      .catch(err => console.log(err));
    console.log(this.props.data.id);
  };

  render() {
    const { imgURL, eventName, city, date, info } = this.props.data;
    return (
      <section key={this.props.key}>
        <Paper square="true" elevation={20}>
          <Box display="flex" alignContent="center">
            <img src={imgURL} alt="events" />
          </Box>
        </Paper>

        <Paper elevation={3}>
          <Box textAlign="center">
            <Box
              lineHeight={4}
              fontFamily="Roboto, Helvetica,Arial, sans-serif"
              fontWeight="fontWeightBold"
            >
              {eventName}
            </Box>
            <Box
              lineHeight={4}
              fontFamily="Roboto, Helvetica,Arial, sans-serif"
              fontWeight="fontWeightMedium"
            >
              {city}
            </Box>
            <Box
              lineHeight={4}
              fontFamily="Roboto, Helvetica,Arial, sans-serif"
              fontWeight="fontWeightMedium"
            >
              {date}
            </Box>
            <Box
              lineHeight={4}
              fontFamily="Roboto, Helvetica,Arial, sans-serif"
              fontStyle="oblique"
              fontWeight="fontWeightLight"
            >
              {info}
            </Box>
          </Box>
        </Paper>
        <Button ariant="outlined" color="secondary" onClick={this.clickDelete}>
          {" "}
          delete event: {eventName}
        </Button>
        {this.state.togg && (
          <UpdateEvent
            raveID={this.props.raveID}
            data={this.props.data}
            updateList={this.props.updateList}
          />
        )}
        <Button ariant="outlined" color="primary" onClick={this.toggleExpand}>
          edit
        </Button>
      </section>
    );
  }
}
