import React from "react";
import axios from "axios";
import RaveEvent from "./components/RaveEvent";
import InputCard from "./components/InputCard"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  // component did mount here essentially take all my data as soon as the pages loads.
  // which i will pass back to my state with this.set state.

  componentDidMount() {
    axios
      .get("/api/riot")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }
    // let {id,city,image, date, rsvp} = this.state.data
    
    render() {
      const {data}  = this.state

    return (
      <div>
        <aside>
        <RaveEvent data={data}></RaveEvent>
        <InputCard></InputCard>
       </aside>
      </div>
    );
  }
}

export default App;
