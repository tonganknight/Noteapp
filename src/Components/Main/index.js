import React from 'react';


function Note({note, index, createNote, UpdateNote, deleteNote}){

    return{
        
    }
}


function Main() {

const [note, setNote] =React.useState([
{
    NoteName: "This is the first Dummy Note",
    Text: "This is the first place holder note",
    DateTime: "1:33PM"
},
{
    NoteName: "This is the Second Dummy Note",
    Text: "This is the Second place holder note",
    DateTime: "1:33PM"
},
{
    NoteName: "This is the Third Dummy Note",
    Text: "This is the Third place holder note",
    DateTime: "1:33PM"
},
{
    NoteName: "This is the Fourth Dummy Note",
    Text: "This is the Fourth place holder note",
    DateTime: "1:33PM"
}

]);

    function NoteItem ({note}){

        return(
            <button className="NoteItem">{note.NoteName} </button>  
        )
    }





    return(
        <div className="MainflexLg">

            <div className="PadLg">

               <div className="PadTitle">
                   Your Pad
               </div>

               <button className="CreateButton"> Create New Note +</button>
               <button className="CreateButton"> Create New Event +</button>
               <button className="CreateButton"> Create New Calculation +</button>

               <div className="PadTitle">
                    My Notes
               </div>


               <div className="SavedNotesFlex">
                {note.map(
                    ((note, index) => (<NoteItem note={note} index= {index} key={index} />))
                )}

               </div>
            </div>

            <div className="NoteFlex">

            





            </div>



        </div>
    );
};
export default Main