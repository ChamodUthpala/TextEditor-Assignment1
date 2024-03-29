//function to make text Bold
function toBold(){
    document.execCommand('bold',true,null);
}

//function to set Underline
function toUnderline(){
    document.execCommand('underline', true, null);
}

//function to set Italic
function toItalic(){
    document.execCommand('italic', true, null);
}

//Funtion to set FontColor
function changeFontColor() {

    var editableDiv = document.getElementById("txtEditor");
    var fontColorPicker = document.getElementById("fontColorPicker").value;

    if (document.queryCommandSupported('foreColor')) {
      document.execCommand('styleWithCSS', false, true);
      document.execCommand('foreColor', false, fontColorPicker);
    } else {
      // Fallback for browsers that don't support document.execCommand('foreColor')
      var selection = window.getSelection();
      if (!selection.isCollapsed) {
        var range = selection.getRangeAt(0);
        var span = document.createElement("span");
        span.style.color = fontColorPicker;
        range.surroundContents(span);
      }
    }
}

function setColor(){
    fontColorPicker.value = "#ff0000";
}


//Functions to set Text Alignments 

//Left
function Left() {
    
    var editableDiv = document.getElementById("textArea");
    editableDiv.style.textAlign = "left";
  }
//Center
function Center() {

    var editableDiv = document.getElementById("textArea");
    editableDiv.style.textAlign = "Center";
}

//Right
function Right() {
    
    var editableDiv = document.getElementById("textArea");
    editableDiv.style.textAlign = "right";
}

//Justify
function Justify() {
    
    var editableDiv = document.getElementById("textArea");
    editableDiv.style.textAlign = "Justify";
}

//Function to Undo & Redo
var undoStack = [];
var redoStack = [];

// Function to save the current state
function saveState() {
  undoStack.push(textArea.innerHTML);
  redoStack = [];
}

//Undo
function Undo() {

    if (undoStack.length > 1) {
      redoStack.push(undoStack.pop());
      textArea.innerHTML = undoStack[undoStack.length - 1];
    }
}
//Redo
function Redo() {
    
    if (redoStack.length > 0) {
      undoStack.push(redoStack.pop());
      textArea.innerHTML = undoStack[undoStack.length - 1];
    }
}

//EventListner
textArea.addEventListener("input", saveState);
