import React from "react";
import PostEvent from "./PostEvent";

export default class InputCard extends React.Component {
  constructor() {
    super();
    this.state = {
      togg: false
    };
  }

  toggleExpand = () => {
    this.setState({ togg: !this.state.togg });
  };

  render() {

    return (
      <div>
        {this.state.togg && ( <PostEvent></PostEvent>)}
        <button onClick= {this.toggleExpand}>newEvent</button>
      </div>
    );
  }
}
