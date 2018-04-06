import React from 'react';
import { connect } from 'react-redux';
import { changeOSCType } from './actions';
import './index.css';

class WaveformOSC extends React.Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.waveformClicked = this.waveformClicked.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  waveformClicked(type) {
    this.props.changeOSCType(type);
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
          <img src={require('./images/'+this.props.oscType+'.png')} />
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

function mapStateToProps(state){
  return {
    oscType: state.oscType,
  }
}

function mapDispatchToProps(dispatch){
  return {
    changeOSCType: (type) => dispatch(changeOSCType(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaveformOSC);