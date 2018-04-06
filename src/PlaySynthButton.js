import React from 'react';
import './index.css';
import store from './store'
import { playSynth } from './actions'
import { connect } from 'react-redux'

class PlaySynthButton extends React.Component {

  constructor(props) {
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.playSynth(this.props.isSynthPlaying)
  }

  render() {
  	return(
  		<button class="customButton" onClick={this.handleClick}>
  		  {this.props.isSynthPlaying ? 'Stop' : 'Play'}
  		</button>
  		);
  }
}

function mapStateToProps(state){
  return {
    isSynthPlaying: state.isSynthPlaying
  }
}

function mapDispatchToProps(dispatch){
  return {
    playSynth: () => dispatch(playSynth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaySynthButton);