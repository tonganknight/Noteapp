import React, {useEffect, useState } from 'react';
import {Breakpoint} from 'react-socks'

import MobileUI from '../MobileUI';

var moment = require('moment');

function Main() {
    const TimeNow = moment().format("MMMM Do YYYY, h:mm a");
    const [displayedNote, setDisplayedNote] = React.useState([
        { NoteName: "My Note!", Text: "My Very First Note!", DateTime: "October 22nd 2021 4:00pm"}
    ]);
    const [Events, setEvents]= React.useState([
        {EventTitle: "Doctors Appointment", EventDate: "December 1, 2021", EventDetails: "Bring the Eggnog"}
    ]);
    /*State to manage the Date picked in the SM Modal*/
    const [SmDate, setSmDate] = React.useState([{ SmNote: "Note"}]);
    /*controls the state of the NoteButtons for CRUD*/
    const [BtnTrigger, setBtnTrigger]= React.useState(true);
    const [DeleteEventButton, SetDeleteEventButton]= React.useState(false);
    /*controls the current clicked note passes state it for array manipulation*/
    const [CurrentNote, setCurrentNote]= React.useState([{Note: "Note"}]);
    const [ShowDateModal, setShowDateModal] = useState(false);

function CreateNote (){
    let Title =  document.getElementById("Title").value;
    let NoteTime = TimeNow;
    let NoteText = document.getElementById("NoteText").value;
    /*Check displayedNote for duplicate Note Titles, or Note Text
    if there are none, they should return -1*/ 
    let CheckForTitle = displayedNote.findIndex(function (TitleName) {
        return TitleName.NoteName === `${Title}`;
    });
    console.log(CheckForTitle);
    /* if CheckForTitle does not return -1// meaning if it is not a unique
    title. Open the Modal */
    if(CheckForTitle !== -1){
        window.alert("You already have a Note Called this.Please make sure your Title is unique.");
        return;
    }
    /* if user tires to sumbit a blank title*/
    if(Title === ""){
        window.alert("You Note must have a Title");
        return;
    }
    /*log all three text fields on creation for testing*/
    console.log(Title);
    console.log(NoteTime);
    console.log(NoteText);
    /* create a new object with the text area entries and save them to 
    DisplayedNote state */
    const newdisplayedNote = [...displayedNote, {NoteName: Title, Text: NoteText, DateTime: TimeNow}];
    console.log(newdisplayedNote);
    setDisplayedNote(newdisplayedNote);
    /*set the button state to show the Update and Delete Buttons*/
    setBtnTrigger(!BtnTrigger);
}

/*Used to clear Note UI in other functions*/
function ClearNoteforNew(){
  document.getElementById("Title").value = "";
  document.getElementById("NoteText").value= "";
  setBtnTrigger(true);
  console.log(BtnTrigger);
};

const GetNote = e =>{
 e.preventDefault();
 /*setting button state*/
 setBtnTrigger(false);
 /*getting the name of the saved Button*/
 let ClickedBtn = e.target.innerHTML;
 console.log("here is the ClickedBtn return " + ClickedBtn);
 /*Removed the current button state, and add the title of the saved button
  you clicked to the CurrentNote State*/
 let NewCurrentNote=[...CurrentNote];
 NewCurrentNote.splice(0, 1, {Note: `${ClickedBtn}`});
 setCurrentNote(NewCurrentNote);
 /* Search through displayedNote for the Name of the Saved Button
 you Clicked and returns the position in the Array*/
 let NoteNameIndex = displayedNote.findIndex(function (TitleName) {
    return TitleName.NoteName === `${ClickedBtn}`;
});
/*Takes the position of NoteNameIndex and Searches 
displayedNote. Then  deconstructs displayedNote*/
let Note = displayedNote[NoteNameIndex]
let Title = Note.NoteName;
let Text = Note.Text;
/*Assigns the Note to the text areas*/
document.getElementById("Title").value = Title;
document.getElementById("NoteText").value = Text;
 
};

function DeleteNote(){
    /* find the index of the Title value, and return its undex*/
   let Title = document.getElementById("Title").value;
   let NoteNameIndex = displayedNote.findIndex(function (TitleName) {
            return TitleName.NoteName === `${Title}`;
    });
    console.log(NoteNameIndex);
    /*splice the returned index from the displayNote*/
    let NewDisplayedNote = [...displayedNote];
    NewDisplayedNote.splice(NoteNameIndex, 1);
    console.log(NewDisplayedNote);
    /* update the state of with the new displayedNote */
    setDisplayedNote(NewDisplayedNote);
    /*set the Button state to create Note button, and clear all text area fields */
    setBtnTrigger(true);
    ClearNoteforNew()
}

function UpdateNote(){  
    /*creating targets */
    let NewDisplayedNote =[...displayedNote];
    let NewTitle = document.getElementById("Title").value;
    let NewText = document.getElementById("NoteText").value;
    let NoteTime = TimeNow;
   /*Taking the Current saved Note. This should be the note you clicked on 
   then Destructing that to get the Title of the note you clicked*/
    let NowNote = CurrentNote[0]
    let Current= NowNote.Note
    /*Finding by CurrentNote in displayedNote and returning the index*/
    let NoteNameIndex = displayedNote.findIndex(function (TitleName) {
    return TitleName.NoteName === `${Current}`;
    });
    /*taking that NoteNameIndex's Index and splicing it out, and setting 
    the text area data as the new object in the array then update
    displayedNote*/
    NewDisplayedNote.splice(NoteNameIndex, 1, {NoteName:`${NewTitle}`, Text: `${NewText}`, DateTime: `${NoteTime}` });
    setDisplayedNote(NewDisplayedNote);
};

function ButtonView() {
    if(BtnTrigger === false){
        return(
        <div>
            <Breakpoint large up>
            <div className="NoteButtonFlex">
             <button className="DeleteNoteButton" onClick={DeleteNote}>Delete Note</button>
             <button className="UpdateNoteButton" onClick={UpdateNote}>Update Note</button>
            </div>
            </Breakpoint>
            
        </div>
        )
    }

    if(BtnTrigger === true){
        return(
                <Breakpoint large up>
                     <div className="NoteButtonFlex">
                        <button className="CreateNoteButton" onClick={CreateNote}>Create Note</button>
                    </div>
                </Breakpoint>
      )
    }
}

    return(

    <div>

        <Breakpoint large up>

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
                <div className="NoteTitle"><input id="Title" placeholder="Your Title Here" className="Titleinfo"></input></div>
               
                <ButtonView/>
                </div>
                 <div className="NoteTime"id="TimeStamp">{TimeNow}</div>
                <div id="NoteInfoText" className="NoteTextBox">
                    <textarea id="NoteText" placeholder="Your Note Here"className="NoteText"></textarea>
                </div>
              
            </div>

            <div className="EventPad">This will be our Events display</div>

        </div>
        </Breakpoint>

        <MobileUI/>
</div>
    );
    
};
export default Main