import React from 'react';
import axios from 'axios';

export default class PostEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            city: '', 
            imgURL: '',
            date: '',
            RSVP: false,
            info: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick() {
        axios
            .post('/api/riot', this.state)
            .then(res => this.props.retrieveLocations(res.data))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <section>
                <ul>
                <p>new events:</p>
                <input 
                    name='info'
                    placeholder='info'
                    onChange={this.handleChange}
                    />
                <input 
                    name='city'
                    placeholder='enter city'
                    onChange={this.handleChange}
                    />
                <input 
                    name='imgURL'
                    placeholder='enter image URL'
                    onChange={this.handleChange}
                    />
                <button 
                    onClick={this.handleClick}
                    disabled={
                        this.state.city && this.state.info && this.state.imgURL
                        ? false : true}
                        >Submit</button>
                        </ul>
            </section>)}}