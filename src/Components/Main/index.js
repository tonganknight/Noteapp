import React from 'react';
var moment = require('moment');
 /*function Note({note, index, createNote, UpdateNote, deleteNote}){

    return{
        
    }
}

*/

function Main() {

    const TimeNow = moment().format("MMMM Do YYYY, h:mm a");

    const [displayedNote, setDisplayedNote] = React.useState([

    {NoteName: "", Text: "", DateTime: ""}


])

function InputNote (){

    

    let Title =  document.getElementById("Title").value;
    let NoteTime = TimeNow;
    let Text = document.getElementById("NoteInfo").value;
          
    console.log(Title);
    console.log(NoteTime);
    console.log(Text);


    
}

function StaticNote(NoteData){
    return(

    <div className="NoteFlex">
    <div className="NoteInfo">
    <div className="NoteTitle">{NoteData.Title}</div>
    <div className="NoteTime">{NoteData.DateTime}</div>
    <button className="KillButton">Delete Note</button>
    </div>
    <div className="NoteText">
        {NoteData.Text}
    </div>
  

    </div>

    )
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
              
               

               </div>
            </div>

            <div className="NoteFlex">
                <div className="NoteInfo">
                <div className="NoteTitle"><input id="Title" className="Titleinfo"></input></div>
                <div className="NoteTime"id="TimeStamp">{TimeNow}</div>
                <button className="CreateNoteButton" onClick={InputNote}>Create Note</button>
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