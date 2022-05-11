function test1func() {
    let array1 = [
        {
            name: "a",
            octave: "4",
            accidental: "sharp"
        },
        {
            name: "b",
            octave: "4",
            accidental: "flat"
        },
        {
            name: "a",
            octave: "5",
            accidental: "natural"
        },
        {
            name: "c",
            octave: "5",
            accidental: "double-sharp"
        },
        {
            name: "d",
            octave: "4",
            accidental: "double-flat"
        }
    ]
    
    for (i=0; i<array1.length; i++) {
        let noteName = array1[i].name+array1[i].octave;
        console.log(noteName);
        makeNote(noteName);
    }
}

function test2func() {
    let array2 = ["c4","b4","c5"];
    
    for(i=0; i<array2.length; i++) {
        makeNote(array2[i]);
    }
}

test1func();
test2func();