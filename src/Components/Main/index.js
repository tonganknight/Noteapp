import React from 'react';
var moment = require('moment');
 /*function Note({note, index, createNote, UpdateNote, deleteNote}){

    return{
        
    }
}

*/

function Main() {
    const TimeNow = moment().format("MMMM Do YYYY, h:mm a");
    const [displayedNote, setDisplayedNote] = React.useState([])

function CreateNote (){
    let Title =  document.getElementById("Title").value;
    let NoteTime = TimeNow;
    let Text = document.getElementById("NoteInfo").value;
          
    console.log(Title);
    console.log(NoteTime);
    console.log(Text);

    let NewdisplayNote = {
        NoteName: `${Title}`,
        Text: `${Text}`,
        DateTime: `${NoteTime}`
    };

    displayedNote.push(NewdisplayNote);

    setDisplayedNote(displayedNote);
    console.log(displayedNote);
}



    return(
        <div className="MainflexLg">

            <div className="PadLg">

               <div className="PadTitle">
                   Your Pad
               </div>

               <button className="CreateButton" >Create New Note +</button>
               <button className="CreateButton"> Create New Event +</button>
               <button className="CreateButton"> Create New Calculation +</button>

               <div className="PadTitle">
                    My Notes
               </div>


               <div className="SavedNotesFlex">
                { displayedNote.map(note => (

            <div className="SavedNotesFlex">
            <div className="NoteDate">{note.DateTime}</div>
            <div className="NoteTitle">{note.NoteName}</div>
            </div>

                    
                ))}

               </div>

            </div>

            <div className="NoteFlex">
                <div className="NoteInfo">
                <div className="NoteTitle"><input id="Title" className="Titleinfo"></input></div>
                <div className="NoteTime"id="TimeStamp">{TimeNow}</div>
                <button className="CreateNoteButton" onClick={CreateNote}>Create Note</button>
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