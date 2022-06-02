//build_priutches

let pitabet = ["c", "d", "e", "f", "g", "a", "b"];
let pitabetoct = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let priutches = [];

for (i=0; i<pitabetoct.length; i++) {
    for (ii=0; ii<pitabet.length; ii++) {
        priutches.push(pitabet[ii]+pitabetoct[i]);
    }
}
let string = "";
for (i=0; i<priutches.length; i++) {
    string += '"'+priutches[i]+'", ';
}
consoleLog("string: "+string);
consoleLog("hello");