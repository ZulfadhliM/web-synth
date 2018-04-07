import store from './store';
import React from 'react';
import { connect } from 'react-redux';

class SynthEngine extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      context: [],
      isStarted: false
    };
  }

  componentWillMount() {
	var contextClass = (window.AudioContext || window.webkitAudioContext)

	if (contextClass) 
	{
	  // Web Audio API is available.
	  this.state.context = new contextClass();
	} 
	else 
	{
	  alert('Web Audio API is not supported in this browser.')
	}

  }

  playSound() {
  	if (this.props.isSynthPlaying) {
		if (!this.state.isStarted){
		this.osc = new OscillatorNode(this.state.context);
		this.lfo = new OscillatorNode(this.state.context);
		var oscGain = this.state.context.createGain();
		var lfoGain = this.state.context.createGain();
		var masterGain = this.state.context.createGain();
		this.osc.connect(oscGain);
		this.lfo.connect(lfoGain);
		lfoGain.connect(oscGain.gain);
		oscGain.connect(masterGain);
		masterGain.gain.value = this.props.masterGainValue;

		masterGain.connect(this.state.context.destination);
		this.osc.start(0);
		this.lfo.start(0);
		this.state.isStarted = true;
	    }

	}
	else {
	  	if(typeof this.osc !== "undefined") {
		  if (this.state.isStarted){
		  this.osc.stop(0);
		  this.lfo.stop(0);
		  this.state.isStarted = false;
		}
  	    }
  	}
  }

  oscTypeChanged(typeName) {

	if (typeof this.osc !== "undefined") {
	  this.osc.type = typeName;
	}
  }

  lfoTypeChanged(typeName) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.type = typeName;
	}
  }

  oscFrequencyChanged(value) {
	if (typeof this.osc !== "undefined") {
	  this.osc.frequency.setValueAtTime(value, this.state.context.currentTime);
	}
  }

  lfoFrequencyChanged(value) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.frequency.setValueAtTime(value, this.state.context.currentTime);
	}
  }

  render() {
  	if(typeof this.osc !== "undefined") {
  		this.osc.onended = function() {
  			console.log("hey")
  		}
  	}
  	this.playSound(this.props.isSynthPlaying);
  	this.oscTypeChanged(this.props.oscType);
  	this.lfoTypeChanged(this.props.lfoType);
  	this.oscFrequencyChanged(this.props.oscFreq);
  	this.lfoFrequencyChanged(this.props.lfoFreq);

  	return (null)
  }
}

function mapStateToProps(state){
  return {
    isSynthPlaying: state.isSynthPlaying,
    oscFreq: state.oscFreq,
    lfoFreq: state.lfoFreq,
    masterGainValue: state.masterGainValue,
    oscType: state.oscType,
    lfoType: state.lfoType
  }
}

export default connect(mapStateToProps)(SynthEngine);