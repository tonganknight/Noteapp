import React from 'react';
import InputNote from "../InputNote";

 /*function Note({note, index, createNote, UpdateNote, deleteNote}){

    return{
        
    }
}

*/

function Main() {

const [displayedNote, setDisplayedNote] = React.useState([

    {NoteName: ""},
    { Text: "" },
    {DateTime: ""}
])

    function NoteItem ({note}){

        return(
            <div>
            <div className="NoteDate">{note.DateTime}</div>
            <button   className="NoteItem">{note.NoteName} </button>  
            </div>
        )
    }
    


    function NoteInput({ addNote }) {
        const [value, setValue] = React.useState("");
        const handleSubmit = e =>{
            e.preventDefault();
            if (!value) return;
            addNote(value);
            setValue("");
        };

        return(
            <form onSubmit={handleSubmit}>

            <textarea className="NoteField" value={value} onChange={e=> setValue(e.target.value)}>

            </textarea>
            
            </form>
        )

        
    }

    function CreateNewNote (){

  
    }


    return(
        <div className="MainflexLg">

            <div className="PadLg">

               <div className="PadTitle">
                   Your Pad
               </div>

               <button className="CreateButton" > Create New Note +</button>
               <button className="CreateButton"> Create New Event +</button>
               <button className="CreateButton"> Create New Calculation +</button>

               <div className="PadTitle">
                    My Notes
               </div>


               <div className="SavedNotesFlex">
              
               

               </div>
            </div>

            <InputNote/>


            <div className="EventPad">This will be our Events display</div>



        </div>





    );
};
export default Main