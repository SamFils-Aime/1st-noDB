import React from "react";
import axios from "axios";
import RaveEvent from "./components/RaveEvent";
import InputCard from "./components/InputCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/riot")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  updateList = UPDATE => {
    this.setState({ data: UPDATE });
  };

  raveId = data => {
    return data;
  };

  render() {
    const idLength = this.state.data.length;
    const { data } = this.state;

    return (
      <div>
        <aside>
          <RaveEvent
            nameEvent={data.nameEvent}
            data={data}
            updateList={this.updateList}
          />
          <InputCard addEvent={this.addEvent} 
          raveId={this.raveId(idLength)} 
          updateList={this.updateList}
          />
        </aside>
      </div>
    );
  }
}

export default App;
