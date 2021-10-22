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
        {NoteName: "My Note!", Text: "My Very First Note!", DateTime: "October 22nd 2021 4:00pm"}
    ])

function CreateNote (){
    let Title =  document.getElementById("Title").value;
    let NoteTime = TimeNow;
    let NoteText = document.getElementById("NoteInfo").value;
    let Time = document.getElementById("TimeStamp").value
          
    console.log(Title);
    console.log(NoteTime);
    console.log(Text);

    const newdisplayedNote = [...displayedNote, {NoteName: Title, Text: NoteText, DateTime: TimeNow}];
    console.log(newdisplayedNote)
    setDisplayedNote(newdisplayedNote);
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
                {displayedNote.map(note =>{

                    return(
                        <div>
                        <div className="NoteDate">{note.DateTime}</div>
                        <button className="NoteItem">{note.NoteName}</button>
                        </div>

)
})
}
                    
            
        

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