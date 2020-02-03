import React from "react";
import RaveStack from "./RaveStack"

export default class RaveEvent extends React.Component {







  render() {

    const { data } = this.props;
    const mapEvents =  data.map((data,index) => { return(
              <RaveStack data={data} key={index}
              updateList={this.props.updateList}/>
    )})


  return (
    <div>
       <ul>
        {mapEvents}
        </ul>
      </div>
    )
  }
}
