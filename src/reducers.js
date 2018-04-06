import { PLAY_SYNTH, CHANGE_LFO_TYPE, CHANGE_LFO_FREQ, CHANGE_OSC_TYPE, CHANGE_OSC_FREQ } from './actions'

const initialState = {
  isSynthPlaying: false,
  oscFreq: 500,
  lfoFreq: 40,
  masterGainValue: 0.03,
  oscType: 'sine',
  lfoType: 'sine'
};

function rootReducer(state = initialState, action){
  switch(action.type){
  	case PLAY_SYNTH:
  	  return Object.assign({}, state, {
        isSynthPlaying: !state.isSynthPlaying
      })
    case CHANGE_LFO_TYPE:
      return Object.assign({}, state, {
        lfoType: action.waveType
      })
    case CHANGE_OSC_TYPE:
      return Object.assign({}, state, {
        oscType: action.waveType
      })
    case CHANGE_LFO_FREQ:
      return Object.assign({}, state, {
        lfoFreq: action.freq
      })        
    case CHANGE_OSC_FREQ:
      return Object.assign({}, state, {
        oscFreq: action.freq
      })  
    default:
      return state
  }
}

export default rootReducer;

