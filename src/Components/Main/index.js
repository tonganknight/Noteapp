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

const [displayedNote, setDisplayedNote] = React.useState([

    {NoteName: ""},
    { Text: "" },
    {DateTime: ""}
])



  /*  function displayNote(){

        return(

            <div className="NoteFlex">
                <div className="NoteInfo">
                <div className="NoteTitle">{displayedNote.NoteName}</div>
                <div className="NoteTime">{displayedNote.DateTime}</div>
                <button className="KillButton">Delete note</button>
                </div>
                <div className="NoteText">{displayedNote.Text}</div>
            </div>

        )
    } */

    function handleNoteSelection({note}){
        const ogNote = [displayedNote.NoteName ] ;

        setDisplayedNote(note);

    }

    function NoteItem ({note}){

        return(
            <div>
            <div className="NoteDate">{note.DateTime}</div>
            <button onClick={handleNoteSelection}  className="NoteItem">{note.NoteName} </button>  
            </div>
        )
    }
    

    const addNote = text => {
        const newNote = [...note, {text}];
        setNote(newNote);
    };

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
              
                {note.map(
                    ((note, index) => (<NoteItem note={note} index= {index} key={index} />))
                )}

               </div>
            </div>

            <div className="NoteFlex">
                <div className="NoteInfo">
                <div className="NoteTitle">{displayedNote.NoteName}</div>
                <div className="NoteTime">{displayedNote.DateTime}</div>
                <button className="KillButton">Delete note</button>
                </div>
                <div className="NoteText">{displayedNote.Text}</div>
            </div>


            <div className="EventPad">This will be our Events display</div>



        </div>





    );
};
export default Main