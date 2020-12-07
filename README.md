# MusicNotes

##Aaron's music notation software.

This program is meant to be a notation app that is not so much for engraving and publishing as it is for practicing your composition skills and sight-reading.

It is meant to fit nicely in any screen although so far it is optimized for my phone, Galaxy s7. When I say optimized I mean it kind of fits for now.

Eventually it will resize the canvas based on window size and repopulate staves and auto-determine measures per line and the like, which I am aware is really complex. For now I am perfectly satisfied to display some note heads on the screen and have buttons that place and move and remove them.

Eventually I want to be able to compose using only the keyboard. Notation software like MuseScore and Finale (the two with which I am somewhat familiar) relies heavily on the mouse. I know both of these programs can interface with a piano keyboard via USB, but excepting that... one should be able to compose with only a computer keyboard.


Some user stories I want to implement:
[] pressing a note entry key or button calls `new musicNote()` and instantiates a musicNote object with name, octave, sharpFlat which is a property which describes whether the note is flat, sharp, or natural, but not whether that symbols is displayed next to the note. That is done with the `accidental` property which is boolean. For example in the key of C if I wanted a C with a redundant natural sign displayed next to it, I would say `accidental = true; flatSharp = 0;` where `{-2: 'bb', -1: 'b', 0: 'U + 266E;', 1: '#', 2: 'x'}`
[] Add key signature selector `<input type="range" min="-7" max="7" value="0" id="key-signature-selector">` Dragging the selector will append a key signature in front of selected notes and at beginnings of systems within selection. Pitches will NOT be affected. For example in key of C if I have c4, d4, e4, f4, and change key to Db, the musicNote objects will detect that they need to display natural sign in front of d4 and e4 because those notes would otherwise be flat in Db key.
[] function to transpose note or notes while preserving diatonic intervals. For example, in key of C if I have c4, d4, f#4, and I transpose up 4 half-steps without changing key signature, I will be asked to decide whether I want to transpose up by a major third or by a diminished fourth (enharmonically the same interval but will result in different letter names for the notes and therefore different positions on the staff.) So if I choose major third, the new letter names will be e, f, a (two steps up the alphabet), and if I choose diminished fourth, the new letter names will be f, g, b (three steps up the alphabet). then the proper accidentals will be applied so that these different spellings will enharmonically be the same pitches whether I choose to call my 4 halfspet ascending transposition a transposition of a major-third or a diminished-fourth.
[] Using the arrow keys, I can go from note to note, where the selected note shows as purple or blue.
When a note is selected, I can press up and down arrows to move the note up or down on the staff.
Unlike in MuseScore where this will cause a chromatic movement, I want this movement to be diatonic.
For example, in the key of 3 sharps, if I select an E and press up, the note will become F#.
In the key of 4 flats, if I select an Eb and press up arrow, it will become F, or if I select G and press up arrow it will become Ab, whatever is the next step in the diatonic scale.
[] holding shift and pressing up will transpose the selection up a halfstep. So in key of 0 sharps, if I select sequence of notes [e4, d4, c4], and press shift+up, it will become [f4, Eb4, Dd4]. If I press up again, it will become [F#4, E4, D4].

My idea with this app is not to re-create MuseScore, Finale, Sibelius, Dorico, etc. but to build a system that works for me and out of which I can build some music games for ear training, sight-reading, transposition, etc.
