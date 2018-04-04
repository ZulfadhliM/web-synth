var contextClass = (window.AudioContext || window.webkitAudioContext)

if (contextClass) 
{
  // Web Audio API is available.
  var context = new contextClass();
  var analyser = context.createAnalyser();
} 
else 
{
  alert('Web Audio API is not supported in this browser.')
}

var isPlaying = false;
var osc, lfo, lfoGain, oscGain, masterGain;

// Default synthesiser settings
var oscFreq = 110;
var lfoFreq = 200;
var masterGainValue = 0.03;
var oscType = 'sine';
var lfoType = 'sine';

export function buttonClicked()
{
	if (isPlaying)
	{
		stopSound();
	}
	else
	{
		playSound();

	}

}

export function playSound()
{
	osc = context.createOscillator();
	lfo = context.createOscillator();
	oscGain = context.createGain();
	lfoGain = context.createGain();
	masterGain = context.createGain();

	osc.type = oscType;
	lfo.type = lfoType;
	osc.frequency.setValueAtTime(oscFreq, context.currentTime);
	lfo.frequency.setValueAtTime(lfoFreq, context.currentTime);

	osc.connect(oscGain);
	lfo.connect(lfoGain);
	lfoGain.connect(oscGain.gain);
	oscGain.connect(masterGain);

	masterGain.gain.value = masterGainValue;

	masterGain.connect(context.destination);
	osc.start(0);
	lfo.start(0);

	isPlaying = true;
}

export function stopSound()
{
	osc.stop(0);
	lfo.stop(0);

	isPlaying = false;
}

export function volumeChanged(element)
{
	masterGainValue = element.value/100
	masterGain.gain.value = masterGainValue;
}

export function oscTypeChanged(typeName)
{
	oscType = typeName;

	if (isPlaying) {
	osc.type = oscType;
	}
}

export function lfoTypeChanged(typeName)
{
	lfoType = typeName;

	if (isPlaying) {
	lfo.type = lfoType;
	}
}

export function oscFrequencyChanged(value)
{
	oscFreq = value;

	if (isPlaying) {
	osc.frequency.setValueAtTime(oscFreq, context.currentTime);
	}
}

export function lfoFrequencyChanged(value)
{
	lfoFreq = value;

	if (isPlaying) {
	lfo.frequency.setValueAtTime(lfoFreq, context.currentTime);
	}
}

