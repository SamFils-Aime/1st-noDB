import React from 'react';
import axios from "axios"

export default class PostEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            eventName: '',
            city: '', 
            imgURL: '',
            date: '',
            RSVP: false,
            info: ''
        }
    }


    
    handleChange=(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addEvent = () => {
        axios
        .post("/api/riot", this.state)
        .then(res => this.props.updateList(res.data))
        .catch(err=> console.log(err));
    }
    
      
    render() {
        console.log(this.state.id)
        return (
            <section>
                
                <h1>New Events</h1>
                <h2>There are currently {this.state.id} all started by our user, want to add another?</h2>
                <input 
                    name='imgURL'
                    placeholder='enter image URL'
                    onChange={this.handleChange}
                />
                <input
                    name='eventName'
                    placeholder="enter event name"
                    onChange={this.handleChange}
                />
                <input 
                    name='city'
                    placeholder='enter city'
                    onChange={this.handleChange}
                />
                <input
                    name='date'
                    placeholder='enter date'
                    onChange={this.handleChange}
                />
                <input 
                    name='info'
                    placeholder='info'
                    onChange={this.handleChange}
                />
                <button onClick={this.newId} >commit to list</button>
                <button 
                    onClick={this.addEvent}
                    disabled={
                        this.state.city && this.state.info && this.state.imgURL&&this.state.date
                        ? false : true}
                    >Submit new post</button>
            

            </section>
        )
    }
}