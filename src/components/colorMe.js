import React, { Component } from 'react';

export default class colorMe extends Component {
    constructor() {
        super()

        this.state = {
            heading: "Color Me",
            color: "black",
            headingInput: "Color Me",
            colorInput: "black"
            
        }
        
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        
        this.setState ({
            color: this.state.colorInput,
            heading: this.state.headingInput
        })
    }

    
  
  
    render() {
    return (
      <div>
        <h1 style={{ color: this.state.color}}>{this.state.heading}</h1>
        <form onSubmit={this.handleSubmit}>
            <input name='colorInput' type="color" value={this.state.colorInput} onChange={this.handleChange} />
            <input name='headingInput' type="text" placeholder='Type a heading' value={this.state.headingInput} onChange={this.handleChange}/>
            <button type='submit'>Submit</button>
            
        </form>
      </div>
    );
  }

}