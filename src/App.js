import React, { Component } from 'react';
import { bankOne, bankTwo } from './audio/audio.js';
import Border from './components/Border.js';
import Logo from './components/Logo.js';
import Controls from './components/Controls.js';
import Controls2 from './components/Controls2.js';
import PadBank from './components/PadBank.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: "",
      currentBankPad: bankOne,
      volume: 50,
      borderColor: "black"
    };
    this.handlePowerChange = this.handlePowerChange.bind(this);
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleBankChange = this.handleBankChange.bind(this);
    this.handleBorderChange = this.handleBorderChange.bind(this);
  }

  handlePowerChange() {
    this.setState((prevState) => ({ power: !prevState.power }));
  }

  handleDisplayChange(id) {
    if (this.state.power) {
      this.setState({ display: id });
      setTimeout(() => {
        this.setState({ display: "" });
      }, 1500);
    }
  }

  handleVolumeChange(vol) {
    this.setState({ volume: vol });
  }

  handleBankChange() {
    this.setState((prevState) => {
      if (prevState.currentBankPad === bankOne) {
        return { currentBankPad: bankTwo };
      } else {
        return { currentBankPad: bankOne };
      }
    });
  }

  handleBorderChange(color) {
    if (this.state.power) {
      this.setState({ borderColor: color });
      setTimeout(() => {
        this.setState({ borderColor: "black" });
      }, 800);
    }
  }

  render() {
    return (
      <Border borderColor={this.state.borderColor}>
        <div id="drum-machine" className="App">
          <Logo name="Drum Machine" />
          <Controls
            power={this.state.power}
            volume={this.state.volume}
            onPowerChange={this.handlePowerChange}
            onVolumeChange={this.handleVolumeChange}
          />
          <Controls2
            onBankChange={this.handleBankChange}
            display={this.state.display}
          />
          <PadBank
            power={this.state.power}
            updateDisplay={this.handleDisplayChange}
            currentBankPad={this.state.currentBankPad}
            clipVol={this.state.volume}
            updateBorder={this.handleBorderChange}
          />
        </div>
      </Border>
    );
  }
}

export default App;
