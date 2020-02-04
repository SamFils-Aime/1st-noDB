import React from "react";
import PostEvent from "./PostEvent";
import { Button } from "@material-ui/core";

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
        {this.state.togg && (
          <PostEvent
            raveId={this.props.raveId}
            updateList={this.props.updateList}
          />
        )}

        <Button
          variant="contained"
          color="secondary"
          size="large"
          position="sticky"
          onClick={this.toggleExpand}
        >
          newEvent
        </Button>
      </div>
    );
  }
}
