console.log("hi how are you, this is main.js")

  console.log("main.js has loaded");
  
  window.addEventListener("keydown", function (e) {
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault(); // prevent space-bar and arrow-keys from scrolling the page
      }
  }, false);
  
  $(document).keypress((e) => {
      console.log(`You pressed: ${e.which}`);
      appendScoreComponent(new MusicNote(keyMap[e.which].slice(0, 1), keyMap[e.which].slice(1, 2), accidentalSlider.value))
  });

  $(document).keyup((e) => {
          console.log(`You pressed: ${e.which}`);
          if (e.which == 8) {
              startOver();
          } else if (e.which == 38) { //up
              decreaseY_5();
          } else if (e.which == 39) { //right
              increaseX_5();
          } else if (e.which == 40) { //down
              increaseY_5();
          } else if (e.which == 37) { //left
              decreaseX_5();
          } else if (e.which == 32) { //spacebar
              console.log("spacebar");
          }
          drawReticle(x, y);
          console.log(`x=${x}, y=${y}`);
          updateRender();
      });
      var keyMap = {
          "122": "c3", "120": "d3",  "99": "e3", "118": "f3",  "98": "g3", "110": "a3", "109": "b3",
          "97": "c4", "115": "d4", "100": "e4", "102": "f4", "103": "g4", "104": "a4", "106": "b4",
          "113": "c5", "119": "d5", "101": "e5", "114": "f5", "116": "g5", "121": "a5", "117": "b5",
          "49": "c6",  "50": "d6",  "51": "e6",  "52": "f6",  "53": "g6",  "54": "a6",  "55": "b6",
        }
        
        // let scale = 1;
        let x = 100;
        let y = 100;
        let scoreComponents = [];
        let accidental;
        const accidentalTypes = ["double-flat", "flat", "natural", "sharp", "double-sharp"];
        const accidentalSlider = document.querySelector("#accidental-slider");
        const accidentalDisplay = document.querySelector("#accidental-display");
        window.onload(accidentalUpdate());
        function accidentalUpdate() {
            accidental = accidentalTypes[parseInt(accidentalSlider.value)+2];
            let accidentalValue = document.createTextNode(accidental);
            while(accidentalDisplay.firstChild){
                accidentalDisplay.removeChild(accidentalDisplay.firstChild);
            }
            accidentalDisplay.appendChild(accidentalValue);
        }
        
        appendScoreComponent = (newScoreComponent) => {
            scoreComponents.push(newScoreComponent);
        };
        //   class scoreComponent {
            //       constructor() {
                
                //       }
                //   }
                // class MusicNote extends scoreComponent {
                //     constructor(name, octave, accidental) {
                //         this.name = name;
                //         this.octave = octave;
                //         this.accidental = accidental;
                //         // this.showAccidental = (some conditions)
                //         // this.selected = (some conditions)
                //     }
                // }
                function setNoteHeadXY() {
                    x = noteHeadXPositionSetter.value;
                    y = noteHeadXPositionSetter.value;
                    while (xSpan.firstChild) {
                        xSpan.removeChild(xSpan.firstChild);
                    }
                    while (ySpan.firstChild) {
                        ySpan.removeChild(ySpan.firstChild);
                    }
                    let xOutput = document.createTextNode(x);
                    let yOutput = document.createTextNode(y);
                    xSpan.appendChild(xOutput);
                    ySpan.appendChild(yOutput);
                }
                
                drawNoteHead(50, 50);
                
                
                
            