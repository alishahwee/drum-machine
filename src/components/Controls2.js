import React, { Component } from 'react';

export default class Controls2 extends Component {
  constructor(props) {
    super(props);
    this.handleToggleSwitch = this.handleToggleSwitch.bind(this);
  }

  handleToggleSwitch() {
    this.props.onBankChange();
  }

  render() {
    return (
      <div className="Controls2">
        <div className="Controls2__bank">
          <span>BANK</span>
          <label className="Controls2__switch">
            <input type="checkbox" onChange={this.handleToggleSwitch} />
            <span className="Controls2__switch__slider" />
          </label>
        </div>
        <div id="display" className="Controls2__display">
          <span className="Controls2__display__text">{this.props.display}</span>
        </div>
      </div>
    );
  }
}
