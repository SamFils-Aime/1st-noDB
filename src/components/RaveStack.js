import React from "react";
import axios from "axios";
import UpdateEvent from "./UpdateEvent";

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
  };

  render() {
    const { imgURL, eventName, city, date, info,id} = this.props.data;

    return (
      <section key={this.props.key}>
        <img src={imgURL} alt="events" />
        <h1>{eventName}</h1>
        <h2>{city}</h2>
        <h2>{date}</h2>
        <h2>{info}</h2>
        <button onClick={this.clickDelete}> delete event: {eventName}</button>
        {this.state.togg && (
          <UpdateEvent
            data={this.props.data}
            updateList={this.props.updateList}
          />
        )}

        <button onClick={this.toggleExpand}>edit</button>
      </section>
    );
  }
}
