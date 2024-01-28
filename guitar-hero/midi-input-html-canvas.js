window.addEventListener('load', init);

    function init() {
      navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    }

    function onMIDISuccess(midiAccess) {
      const inputs = midiAccess.inputs.values();
      for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
        input.value.onmidimessage = onMIDIMessage;
      }
    }

    function onMIDIFailure() {
      console.error('Could not access MIDI devices.');
    }

    function onMIDIMessage(message) {
      const [command, note, velocity] = message.data;
      
      // Note On event
      if (command === 144 && velocity > 0) {
        // Handle the note press event
        console.log('Note On - Note:', note, 'Velocity:', velocity);
        // Add your canvas drawing logic here based on the note played
      }
      
      // Note Off event (velocity of 0)
      if (command === 128 || (command === 144 && velocity === 0)) {
        // Handle the note release event
        console.log('Note Off - Note:', note, 'Velocity:', velocity);
        // Add any logic for when a note is released
      }
    }

    console.log('MIDI is ready to use.');