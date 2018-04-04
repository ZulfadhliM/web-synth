import React from 'react';
import * as synth from './synthesiserSounds.js';
import './index.css';

class XYPad extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      circlePos: [this.props.width/2, this.props.height/2],
      prevCirclePos: [this.props.width/2, this.props.height/2],
      startMove: false,
      oscFreqRange: [200, 5000],
      lfoFreqRange: [200, 10]
    };
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleMouseDown, false);
        document.addEventListener('mouseup', this.handleMouseUp, false);
        document.addEventListener('mousemove', this.handleMouseEvent, false);
        var rect = this.refs.canvas.getBoundingClientRect();
        this.canvasPos = [rect.left, rect.top];
        this.ctx = this.refs.canvas.getContext('2d');
        this.ctx.fillStyle = this.props.color;
        this.ctx.fillRect(0,0, this.props.width, this.props.height);


        this.drawLabel();

        this.updateCanvas();
    }

    drawLabel() {
        this.ctx.font = '10px consolas';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#222222';
        this.ctx.fillText('OSCILLATOR FREQUENCY', Math.round(this.props.width/2), 10 + 5);

        this.ctx.rotate(1.5708);
        this.ctx.fillText(
          'LFO FREQUENCY', 
          Math.round(this.props.width / 2), 
          -this.props.width + 10 + 5);
        this.ctx.rotate(-1.5708);
    }

    updateCanvas() {
        this.ctx.beginPath();
        this.ctx.arc(this.state.prevCirclePos[0], this.state.prevCirclePos[1], 7, false, Math.PI * 2, false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.props.color;
        this.ctx.fill();

        this.drawLabel();

        this.ctx.beginPath();
        this.ctx.arc(this.state.circlePos[0], this.state.circlePos[1], 6, false, Math.PI * 2, false);
        this.ctx.closePath();
        this.ctx.fillStyle = "#888888";
        this.ctx.fill();
    }

    handleMouseUp() {
      this.setState({
        startMove: false
      })
    }

    handleMouseDown(event) {
      var posX = event.clientX - this.canvasPos[0];
      var posY = event.clientY - this.canvasPos[1];

      if (posX < this.props.width && posX > 0 && posY > 0 && posY < this.props.height) {
        this.setState({
          startMove: true
        });
      }
    }

    handleMouseEvent(event) {

      if (this.state.startMove) {
        this.state.prevCirclePos = this.state.circlePos;
        var posX = event.clientX - this.canvasPos[0];
        var posY = event.clientY - this.canvasPos[1];

        if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({circlePos: [posX, posY]});
        this.updateCanvas();
        this.updateFrequency(posX, posY);
      }
    }

    updateFrequency(posX, posY) {
      var oscFreq = posX / this.props.width * 
        (this.state.oscFreqRange[1] - this.state.oscFreqRange[0]) 
        + this.state.oscFreqRange[0];
      var lfoFreq = posY / this.props.width * 
        (this.state.lfoFreqRange[1] - this.state.lfoFreqRange[0]) 
        + this.state.lfoFreqRange[0];

      synth.oscFrequencyChanged(oscFreq);
      synth.lfoFrequencyChanged(lfoFreq);
    }

    render() {
        const { color, width, height } = this.props;

        return (
            <canvas ref="canvas" width={ width } height={ height }></canvas>           
        );
    }
}


export default XYPad;