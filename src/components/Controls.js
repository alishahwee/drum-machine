import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick() {
    this.props.onPowerChange();
  }

  handleInput(e) {
    this.props.onVolumeChange(e.target.value);
  }

  render() {
    const powerStyle = this.props.power
      ? {
          color: '#3BFF14',
        }
      : {
          color: 'red',
        };
    return (
      <div className="Controls">
        <div className="Controls__power" onClick={this.handleClick}>
          <i className="fas fa-power-off" style={powerStyle}></i>
        </div>
        <div className="Controls__volume">
          <input
            type="range"
            value={this.props.volume}
            onInput={this.handleInput}
          />
          <i className="fas fa-volume-up"></i>
        </div>
      </div>
    );
  }
}
