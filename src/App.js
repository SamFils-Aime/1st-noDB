import React from "react";
import axios from "axios";
import RaveEvent from "./components/RaveEvent";
import InputCard from "./components/InputCard";
import Header from "./style/Header";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      togg: false
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

  toggleExpand = () => {
    this.setState({ togg: !this.state.togg });
  };

  render() {
    const idLength = this.state.data.length;
    const { data } = this.state;
    
    return (
      
      <main id="slider">


        <Header togg={this.toggleExpand} />
        {this.state.togg && (
          <aside backGroundColor= "white">
            <RaveEvent
              nameEvent={data.nameEvent}
              data={data}
              updateList={this.updateList}
              raveId={this.raveId(idLength)}
              />
            <InputCard
              addEvent={this.addEvent}
              raveId={this.raveId(idLength)}
              updateList={this.updateList}
              />
          </aside>
        )}
        </main>
         
    );
  }
}

export default App;
