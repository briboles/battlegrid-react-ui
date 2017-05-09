'use strict';

import React from 'react';
import fetch from 'fetch';
import Shared from '../Shared';

// Create props for 
//   brand 
//   brand link
//   main link list
//   right side links list

// Map array to create multiple nav links.

let Button = Shared.Button;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClass = 'btn btn-info navbar-btn navbar-right';
    this.title = props.title
    this.linkList = props.linklist.map((listItem) => 
      <li key={listItem.href}>
        <a href={listItem.href}>{listItem.text}</a>
      </li>
    );
  }

  componentDidMount() {
    fetch
  }

  onClickFunction() {
    
  }
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#/">{this.title}</a>
          </div>
          <Button handleClick={this.onClickFunction} label='Sign In' buttonClass={this.buttonClass}/>
          <ul className="nav navbar-nav">
            {this.linkList}
          </ul>
        </div>
      </nav>
    )
  }
}

