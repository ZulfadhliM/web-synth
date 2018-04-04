import React from 'react';
import * as synth from './synthesiserSounds.js';
import './index.css';


class WaveformLFO extends React.Component {
  constructor(props) {
    super(props);

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.waveformClicked = this.waveformClicked.bind(this);
    this.state = {
      dropdownOpen: false,
      waveform: 'sine'
    };
  }

  waveformClicked(type) {
    this.setState({
      waveform: type,
    });
    synth.lfoTypeChanged(type);
    this.closeMenu();
  }

  showMenu() {
    
    this.setState({ dropdownOpen: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ dropdownOpen: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        <button onClick ={() => this.showMenu()} class="dropdownButton">
          <img src={require('./images/'+this.state.waveform+'.png')} />
        </button>

        {
          this.state.dropdownOpen
            ? (
              <div className="menu" id="onTop">
                <div><button onClick={() => this.waveformClicked('sine')} class="dropdownButtonItem"><img src={require('./images/sine.png')} /></button>
                <button onClick={() => this.waveformClicked('square')} class="dropdownButtonItem"><img src={require('./images/square.png')} /></button></div>
                <div><button onClick={() => this.waveformClicked('triangle')} class="dropdownButtonItem"><img src={require('./images/triangle.png')} /></button>
                <button onClick={() => this.waveformClicked('sawtooth')} class="dropdownButtonItem"><img src={require('./images/sawtooth.png')} /></button></div>
              </div>
            )
            : (
              null
            )
        }

      </div>
    );
  }
}

export default WaveformLFO;