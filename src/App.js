import React from 'react';
import PlaySynthButton from './PlaySynthButton';
import WaveformLFO from './WaveformLFO';
import WaveformOSC from './WaveformOSC';
import XYPad from './XYPad';
import SynthEngine from './SynthEngine';
import './index.css';


class App extends React.Component {
  render() {
    return (
      <div className = "App">
            <h1>OSCILLATOR</h1>
            <div className="column"><h2>Wave</h2></div>
            <div className="column"><WaveformOSC /></div>
            <div><h1>LFO</h1></div>
            <div className="column"><h2>Wave</h2></div>
            <div className="column"><WaveformLFO /></div>
            <div className="column"><h2>Frequency</h2></div>
            <div className="column"><XYPad color="black" width="200" height="200" /></div>
            <div className="buttonArea"><PlaySynthButton /></div>
        <SynthEngine />
      </div>);
  }
}

export default App;