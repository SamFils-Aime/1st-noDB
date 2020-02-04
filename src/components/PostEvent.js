import React from "react";
import axios from "axios";
import { Box, TextField, Button } from "@material-ui/core";

export default class PostEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: "",
      city: "",
      imgURL: "",
      date: "",
      RSVP: false,
      info: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addEvent = () => {
    axios
      .post("/api/riot", this.state)
      .then(res => this.props.updateList(res.data))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.id);
    return (
      <section>
        <Box color="FF6D00" textAlign="center" fontWeight="fontWeightLight">
          <Box
            lineHeight={4}
            fontFamily="Roboto, Helvetica,Arial, sans-serif"
            fontWeight="fontWeightBold"
            border={2}
            color="primary"
            bgcolor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
            borderRadius={15}
          >
            New Events
          </Box>
          <Box
            lineHeight={4}
            fontFamily="Roboto, Helvetica,Arial, sans-serif"
            fontWeight="fontWeightMedium"
          >
            <Box color="#EC407A">
              here are the events added by our users want to add another?
            </Box>
          </Box>
          <TextField
            container
            name="imgURL"
            placeholder="enter image URL"
            onChange={this.handleChange}
          />
          <TextField
            container
            name="eventName"
            placeholder="enter event name"
            onChange={this.handleChange}
          />
          <TextField
            container
            name="city"
            placeholder="enter city"
            onChange={this.handleChange}
          />
          <TextField
            container
            name="date"
            placeholder="enter date"
            onChange={this.handleChange}
          />
          <TextField
            container
            name="info"
            placeholder="info"
            onChange={this.handleChange}
          />
          <Button
            onClick={this.addEvent}
            disabled={
              this.state.city &&
              this.state.info &&
              this.state.imgURL &&
              this.state.date
                ? false
                : true
            }
          >
            Submit new post
          </Button>
        </Box>
      </section>
    );
  }
}
