import React from 'react';

 /*function Note({note, index, createNote, UpdateNote, deleteNote}){

    return{
        
    }
}

*/

function Main() {

const [displayedNote, setDisplayedNote] = React.useState([

    {NoteName: "", Text: "", DateTime: ""}


])

function InputNote (NoteData){

    function handleTitle(){
          let TitleText =  document.getElementById("Title");
          let StringTitleText = toString(TitleText);
          let Title = StringTitleText.trim();

            displayedNote.NoteName = Title;
            setDisplayedNote(Title);

        console.log(displayedNote);
    }



    return(

    <div className="NoteFlex">
    <div className="NoteInfo">
    <div className="NoteTitle"><input id="Title" onChange={handleTitle}className="Titleinfo"></input></div>
    <div className="NoteTime"><input className="Dateinfo"></input></div>
    <button className="CreateNoteButton">Create Note</button>
    </div>
    <div className="NoteText">
        <textarea className="NoteText"></textarea>
    </div>
  

    </div>

    )
}

function CreateNote(){


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



    function CreateNewNote (){

        /*switch statement for component view */
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

            <InputNote NoteData= ""/>


            <div className="EventPad">This will be our Events display</div>



        </div>





    );
};
export default Main