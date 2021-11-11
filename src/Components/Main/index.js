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
        { Index: 0, NoteName: "My Note!", Text: "My Very First Note!", DateTime: "October 22nd 2021 4:00pm"}
    ]);
    const [BtnTrigger, setBtnTrigger]= React.useState(true);

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
    let BtnCount = document.getElementById("SavedNotes").childElementCount;
    console.log("Here is the Element count " + BtnCount);
    let Count = BtnCount.toString();
    console.log("there are "+ Count + " Buttons in the saved notes");
    const newdisplayedNote = [...displayedNote, {Index: BtnCount, NoteName: Title, Text: NoteText, DateTime: TimeNow}];
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
 let ClickedBtn = e.target.id;
 console.log(ClickedBtn);
 let LookUpArr =displayedNote.find(place => place.Index == `${ClickedBtn}`);
 console.log(LookUpArr);
 document.getElementById("Title").value= LookUpArr.NoteName;
 document.getElementById("TimeStamp").value = "";
 document.getElementById("NoteInfo").value = LookUpArr.Text;
 let TargetTitle= document.getElementById("Title");
 TargetTitle.setAttribute("data", `${LookUpArr.Index}`);
 console.log(TargetTitle)
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
}


function ButtonView() {
    if(BtnTrigger === false){
        return(
             <button className="DeleteNoteButton" onClick={DeleteNote}>Delete Note</button>
        )
    }
    if(BtnTrigger === true){
        return(
           <button className="CreateNoteButton" onClick={CreateNote}>Create Note</button>
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