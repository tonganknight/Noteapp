import React from 'react';


function InputNote(NoteData){

    return(

        <div className="NoteFlex">
                <div className="NoteInfo">
                <div className="NoteTitle"><input className="Titleinfo"></input></div>
                <div className="NoteTime"><input className="Dateinfo"></input></div>
                <button className="CreateNoteButton">Create Note</button>
                </div>
                <div className="NoteText">
                    <textarea className="NoteText"></textarea>
                </div>
              

            </div>

    )
}

export default InputNote