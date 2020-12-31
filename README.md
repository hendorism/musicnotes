MusicNotes

Aaron's music notation software.

This program is meant to be a notation app that is not so much for engraving and publishing as it is for practicing your composition skills and sight-reading.

It is meant to be responsive to window size and device size.

To use the app:

https://hendorism.github.io/musicnotes/index.html

Press the space bar to create staves. Currently it creates a hard-coded number of staves, and all notes are treble clef.

1234567 = [C6, D6, E6, F6, G6, A6, B6]
qwertyu = [C5, D5, E5, F5, G5, A5, B5]
asdfghj = [C4, D4, E4, F4, G4, A4, B4]
zxcvbnm = [C3, D3, E3, F3, G3, A3, B3]

By pressing these keys (or the buttons on screen) you're creating a new musicNote object that gets pushed to an array of scoreComponents.

The staves don't exist yet as objects, they just get drawn to the canvas. I'm currently in the process of implementing object oriented programming (OOP) to make the app easier to maintain.


updated 12/29/2020