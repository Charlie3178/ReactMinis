import React, { Component } from 'react';

export default class toggleClock extends Component {
    constructor() {
        super()

        this.state = {
            time: new Date().toLocaleTimeString(),
            isShown: true,
            display: "block"
        

        }       
        this.clockToggle = this.clockToggle.bind(this)
       
    }
    
    componentDidMount() {
        this.liveTime = setInterval(() => {
            this.setState({
                time: String(new Date().toLocaleTimeString())
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.liveTime)
    }

    clockToggle() {
        if (this.state.isShown) {
            this.setState({
                time: "",
                isShown: false,
                display: "none"
            })
        }else {
            this.setState({
                time: new Date().toLocaleTimeString(),
                isShown: true,
                display: "block"
            })
        }
    }

    render() {
    return (
      <div>
        <h1 style={{ display: this.state.display}}>{this.state.time}</h1>
        <button onClick={this.clockToggle}>Toggle Clock</button>
      </div>
    );
  }

}