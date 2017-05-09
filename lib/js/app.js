'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar.js'

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.links = [
      {
        href: '#/publicgames',
        text: 'Public Games'
      },
      {
        href: '#/mygames',
        text: 'My Games'
      }
    ]
  }
  render() {
    return (
      <div>
        <Navbar title='BattleGrid' linklist={this.links}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));