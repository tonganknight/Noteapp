import e from 'express';
import React, {useEffect } from 'react';
var moment = require('moment');
 /*function Note({note, index, createNote, UpdateNote, deleteNote}){

    return{
        
    }
}

*/

function Main() {
    const TimeNow = moment().format("MMMM Do YYYY, h:mm a");
    const [displayedNote, setDisplayedNote] = React.useState([
        { NoteName: "My Note!", Text: "My Very First Note!", DateTime: "October 22nd 2021 4:00pm"}
    ]);
    const [BtnTrigger, setBtnTrigger]= React.useState(true);

/* In Create Note You need to search through displaynote and try to match the current 
title and noteInfo values if there are already present display a warring 
they need to be unique*/
function CreateNote (){
    let Title =  document.getElementById("Title").value;
    let NoteTime = TimeNow;
    let NoteText = document.getElementById("NoteInfo").value;
    if(Title === ""){
        window.alert("You Note must have a Title");
        return;
    }
    console.log(Title);
    console.log(NoteTime);
    console.log(NoteText);
    const newdisplayedNote = [...displayedNote, {NoteName: Title, Text: NoteText, DateTime: TimeNow}];
    console.log(newdisplayedNote);
    setDisplayedNote(newdisplayedNote);
    setBtnTrigger(!BtnTrigger);
}


function ClearNoteforNew(){
  document.getElementById("Title").value = "";
  document.getElementById("NoteInfo").value= "";
  setBtnTrigger(true);
  console.log(BtnTrigger);
};

const GetNote = e =>{
 e.preventDefault();
 setBtnTrigger(false);
 let ClickedBtn = e.target.innerHTML;
 console.log("here is the ClickedBtn return " + ClickedBtn);
 let NoteNameIndex = displayedNote.findIndex(function (TitleName) {
    return TitleName.NoteName === `${ClickedBtn}`;
});
let Note = displayedNote[NoteNameIndex]
let Title = Note.NoteName;
let Text = Note.Text;
document.getElementById("Title").value = Title;
document.getElementById("NoteInfo").value = Text;
};

function DeleteNote(){
   let Title = document.getElementById("Title").value;
   let NoteNameIndex = displayedNote.findIndex(function (TitleName) {
            return TitleName.NoteName === `${Title}`;
    });
    console.log(NoteNameIndex);
    let NewDisplayedNote = [...displayedNote];
    NewDisplayedNote.splice(NoteNameIndex, 1);
    console.log(NewDisplayedNote);
    setDisplayedNote(NewDisplayedNote);
    setBtnTrigger(true);
    ClearNoteforNew()
}

function UpdateNote(){  
    let NewDisplayedNote =[...displayedNote];
    let NewTitle = document.getElementById("Title").value;
    let Text = document.getElementById("NoteInfo").value;
    let NoteTime = TimeNow;
    let NoteNameIndex = displayedNote.findIndex(function (TitleName) {
    return TitleName.Text === `${Text}`;
    });
    NewDisplayedNote.splice(NoteNameIndex, 1, {NoteName:`${NewTitle}`, Text: `${Text}`, DateTime: `${NoteTime}` });
    setDisplayedNote(NewDisplayedNote);
};



function ButtonView() {
    if(BtnTrigger === false){
        return(
            <div className="NoteButtonFlex">
             <button className="DeleteNoteButton" onClick={DeleteNote}>Delete Note</button>
             <button className="UpdateNoteButton" onClick={UpdateNote}>Update Note</button>
            </div>
        )
    }
    if(BtnTrigger === true){
        return(
        <div className="NoteButtonFlex">
           <button className="CreateNoteButton" onClick={CreateNote}>Create Note</button>
        </div>  
      )
    }
}





    return(
        <div className="MainflexLg">

            <div className="PadLg">

               <div className="PadTitle">
                   Your Pad
               </div>

               <button  onClick={ClearNoteforNew}className="CreateButton" >Create New Note +</button>
               <button className="CreateButton"> Create New Event +</button>
               <button className="CreateButton"> Create New Calculation +</button>
               <div className="PadTitle">
                    My Notes
               </div>

               <div id="SavedNotes" className="SavedNotesFlex">
                {displayedNote.map(note =>{

                    return(
                        <div>
                        <div className="NoteDate">{note.DateTime}</div>
                        <button id={note.Index} key={note.Index} onClick={GetNote}className="NoteItem">{note.NoteName}</button>
                        </div>
        )})}                    
               </div>

            </div>

            <div className="NoteFlex">
                <div className="NoteInfo">
                <div className="NoteTitle"><input id="Title" className="Titleinfo"></input></div>
                <div className="NoteTime"id="TimeStamp">{TimeNow}</div>
                <ButtonView/>
                </div>
                <div className="NoteText">
                    <textarea id="NoteInfo" className="NoteText"></textarea>
                </div>
              
            </div>

            <div className="EventPad">This will be our Events display</div>

        </div>
    );
};
export default Main