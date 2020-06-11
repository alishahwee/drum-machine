import React, { Component } from 'react';
import { bankOne, bankTwo } from './audio/audio.js';
import PadBank from './components/PadBank.js';

class App extends Component {
  state = {
    currentBank: bankOne
  }

  render() {
    return (
    <div className="App">
      <PadBank currentBank={this.state.currentBank}/>
    </div>
    );
  }
}

export default App;
