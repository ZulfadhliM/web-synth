import React from 'react';
import PlaySynthButton from './PlaySynthButton';
import WaveformLFO from './WaveformLFO';
import WaveformOSC from './WaveformOSC';
import XYPad from './XYPad';
import './index.css';


class App extends React.Component {
  render() {
    return (
      <div className = "App">
        <table align = "center" width = "100%">
          <tr>
            <td><h1>OSCILLATOR</h1></td>
          </tr>
          <tr>
            <td><h2>Wave</h2></td>
            <td><WaveformOSC /></td>
          </tr>
          
          <tr>
            <td><h1>LFO</h1></td>
          </tr>
          <tr>
            <td><h2>Wave</h2></td>
            <td><WaveformLFO /></td>
          </tr>
          <tr>
            <td><h2>Frequency</h2></td>
            <td><XYPad color="black" width="200" height="200" /></td>
          </tr>
          <tr>
            <td></td>
            <td><PlaySynthButton /></td>
          </tr>
        </table>
        
      </div>);
  }
}

export default App;