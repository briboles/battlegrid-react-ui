'use strict';

import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClass = props.buttonClass || 'btn btn-default';
  }

  render() {
    return (
      <button
        className={this.props.buttonClass}
        style={this.props.buttonStyle}
        onClick={this.props.handleClick}
      >
        {this.props.label}
      </button>
    )
  }
}