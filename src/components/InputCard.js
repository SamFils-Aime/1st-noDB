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
        {this.state.togg && <PostEvent  
        raveId={this.props.raveId}
        updateList={this.props.updateList}/>}
        <button onClick= {this.toggleExpand}>newEvent</button>
      </div>
    );
  }
}
