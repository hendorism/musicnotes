$(document).ready(function(){
  console.log("js/notation_console.js has loaded");

  var notationConsole = document.getElementById("notationConsole");
}); // end jquery
  var notationConsoleEntryNumber = 0;

  function notationConsoleLog(notationConsoleLogEntry) {
    notationConsoleEntryNumber ++;
    let lineBreak = document.createElement("BR");
    let entryNumberSpan = document.createElement("SPAN");
    let entryNumber = document.createTextNode(notationConsoleEntryNumber + ": ");
    let entry = document.createTextNode(notationConsoleLogEntry);
    entryNumberSpan.class = "notation-console-entry-number-span";
    entryNumberSpan.appendChild(entryNumber);
    notationConsole.appendChild(lineBreak);
    notationConsole.appendChild(entryNumberSpan);
    notationConsole.appendChild(entry);
    notationConsole.scrollTop = notationConsole.scrollHeight;
  }
