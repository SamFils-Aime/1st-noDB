import React from "react";

export default class RaveEvent extends React.Component {
  render() {
      const {data}= this.props
    return (
      <div>
       <ul>
        { data.map(data =>(
        <div>

        <img src={data.imgURL} alt="events"/> 
        <h1>{data.city}</h1>
        <h2>{data.date}</h2>
        <h3>{data.info}</h3>
        
        </div>
        ))}
       
      </ul>      
      </div>
    );
  }
}
