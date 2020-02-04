import React from "react";
import axios from "axios";
import { Box, TextField, Button } from "@material-ui/core";

export default class UpdateEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: " ",
      city: " ",
      imgURL: " ",
      date: " ",
      RSVP: " ",
      info: " "
    };
  }
  componentDidMount() {
    const { eventName, city, imgURL, date, RSVP, info } = this.props.data;
    this.setState({ eventName, city, imgURL, date, RSVP, info });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  updateData = () => {
    axios
      .put(`/api/riot/${this.props.data.id}`, this.state)
      .then(res => this.props.updateList(res.data))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.data);
    return (
      <section>
        <Box textAlign="center">
          <Box
            lineHeight={4}
            fontFamily="Roboto, Helvetica,Arial, sans-serif"
            fontWeight="fontWeightMedium"
          >
            New Events
          </Box>
          <Box
            lineHeight={4}
            fontFamily="Roboto, Helvetica,Arial, sans-serif"
            fontWeight="fontWeightMedium"
          >
            {" "}
            do update event if nessecarry
          </Box>
          <TextField
            container
            DefaultValue={this.state.imgURL}
            name="imgURL"
            placeholder="imageURL"
            onChange={this.handleChange}
          />
          <TextField
            container
            DefaultValue={this.state.eventName}
            name=" eventName"
            placeholder="eventName"
            onChange={this.handleChange}
          />
          <TextField
            container
            DefaultValue={this.state.city}
            name="city"
            placeholder="city"
            onChange={this.handleChange}
          />
          <TextField
            container
            DefaultValue={this.state.date}
            name="date"
            placeholder="date"
            onChange={this.handleChange}
          />
          <TextField
            container
            DefaultValue={this.state.info}
            name="info"
            placeholder="info"
            onChange={this.handleChange}
          />
          <Button ariant="outlined" color="secondary" onClick={this.updateData}>
            Submit edit
          </Button>
        </Box>
      </section>
    );
  }
}
