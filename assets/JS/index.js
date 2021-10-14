
//Dom Buttons
const CreateNewNote = document.getElementById("createNewNoteBtn");
const CreateNewEvent= document.getElementById("CreateNewEventBtn");
const CreateNote = document.getElementById("CreateNote");

//Dom Note Fields
const Title = document.getElementById("Title");
const Date = document.getElementById("Date");
const NoteTextarea = document.getElementById("NoteTextarea");

//Dom Control Fields
const SavedNotesField = document.getElementById("SavedNotesField");


function getTitle(){
let Input = Title.value;
if (!Input) return;
let TrimInput = Input.trim();
console.log(TrimInput);
};

function getDate(){

};

function getNoteText(){
let Input = NoteTextarea.value;
if (!Input) return;
let TrimInput = Input.trim();
console.log(TrimInput);

}

function CreateNoteDiv(){


}

CreateNote.addEventListener("click", function(){
    getTitle();
    getNoteText();
})
