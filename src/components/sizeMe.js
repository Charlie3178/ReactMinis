import React, { Component } from 'react';

export default class incrimenter extends Component {
    constructor() {
        super()

        this.state = {
            heading: 12,
            incriment: 2
            
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleTextIncriment=this.handleTextIncriment.bind(this)
        this.handleTextDecriment=this.handleTextDecriment.bind(this)
    }
  
    handleChange(event) {
        this.setState ({
            incriment: event.target.value,
        })
    }

    handleTextIncriment() {
        for (let i = this.state.heading; i < 32; i++) {
            this.setState({
                heading: this.state.heading + this.state.inicriment
            })
        }
    }
    handleTextDecriment() {
        for (let i = this.state.heading; i > 6; i--) {
            this.setState({
                heading: this.state.heading - this.state.inicriment
            })
        }
    }
  
  
    render() {
    return (
      <div>
        <h1 style={{ fontSize: this.state.heading}}>{this.state.heading}px</h1>
        <input 
            type="number" 
            placeholder='Incriment by...'
            onChange={this.handleChange} 
        />
        <button onClick={this.handleTextIncriment}>Increase</button>
        <button onClick={this.handleTextDecriment}>Decrease</button>
      </div>
    );
  }
}