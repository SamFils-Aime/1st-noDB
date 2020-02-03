import React from "react";
import axios from "axios";

export default class UpdateEvent extends React.Component {
  constructor() {
    super();
    this.state = {
        eventName: " ", 
        city: " ", 
        imgURL: " ",
         date: " ", 
         RSVP: " ", 
         info:" "
     
  }
}
componentDidMount(){
    const {  eventName, city, imgURL, date, RSVP, info}=this.props.data
    this.setState({eventName,city,imgURL,date,RSVP,info})
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
        // console.log(this.props.data)
    console.log(this.state);
    return (
      <section>
        <h1>New Events</h1>
        <h2> do update event #{this.state.id} if nessecarry</h2>
        <input
            value={this.state.imgURL}
          name="imgURL"
          placeholder=" image URL"
          onChange={this.handleChange}
        />
        <input
            value={this.state.eventName}
          name=" eventName"
          placeholder=" event name"
          onChange={this.handleChange}
        />
        <input
            value={this.state.city}
          name=" city"
          placeholder=" city"
          onChange={this.handleChange}
        />
        <input
            value={this.state.date}
          name=" date"
          placeholder=" date"
          onChange={this.handleChange}
        />
        <input
            value={this.state.info}
          name=" info"
          placeholder=" info"
          onChange={this.handleChange}
        />
        <button
          onClick={this.updateData}
        >
          Submit edit
        </button>
      </section>
    );
  }
}
