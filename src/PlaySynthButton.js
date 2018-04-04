import React from 'react';
import * as synth from './synthesiserSounds.js';
import './index.css';

class PlaySynthButton extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {isSynthPlaying: false};
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  	this.setState(prevState => ({
  		isSynthPlaying: !prevState.isSynthPlaying
  	}));
  	synth.buttonClicked()
  }

  render() {
  	return(
  		<button class="customButton" onClick={this.handleClick}>
  		  {this.state.isSynthPlaying ? 'Stop' : 'Play'}
  		</button>
  		);
  }
}

export default PlaySynthButton;