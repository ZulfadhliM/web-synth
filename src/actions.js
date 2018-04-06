export const PLAY_SYNTH = 'PLAY_SYNTH';
export const CHANGE_LFO_TYPE = 'CHANGE_LFO_TYPE';
export const CHANGE_LFO_FREQ = 'CHANGE_LFO_FREQ';
export const CHANGE_OSC_TYPE = 'CHANGE_OSC_TYPE';
export const CHANGE_OSC_FREQ = 'CHANGE_OSC_FREQ';

export function playSynth(){
  return {	
    type: 'PLAY_SYNTH'
  }  
};

export function changeLFOType(wave){
  return {	
    type: 'CHANGE_LFO_TYPE',
    waveType: wave
  }  
};

export function changeLFOFreq(value){
  return {	
    type: 'CHANGE_LFO_FREQ',
    freq: value
  }  
};

export function changeOSCType(wave){
  return {	
    type: 'CHANGE_OSC_TYPE',
    waveType: wave
  }  
};

export function changeOSCFreq(value){
  return {	
    type: 'CHANGE_OSC_FREQ',
    freq: value
  }  
};
