import React, { Component } from 'react';

import Incrimenter from "./sizeMe.js";
import ColorMe from "./colorMe";
import ToggleClock from './clock.js';
import AlignMe from './alignMe';
import HideMe from './hideMe.js';
import Counter from './counter.js';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <HideMe />
        <hr />
        <AlignMe />
        <hr />
        <Incrimenter />
        <hr />
        <ColorMe />
        <hr />
        <ToggleClock />
        <hr />
        <Counter />
      </div>
    );
  }
}