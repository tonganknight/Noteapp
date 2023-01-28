import React from'react';
import {useState} from 'react';


function NoteMenu (){

    const [NoteMenuIsActive, setNoteMenuIsActive] =useState(false);
    const [NoteMenuContentAppearActive, setNoteMenuContentAppearActive] = useState(false);
    const [BtnTrigger, setBtnTrigger]= React.useState(true);
    //adds the default state to the notemenu 
    const [AnimationMenu, setAnimationMenu] = useState("PadSm");

    //---------------------API-------Backend intergration------------------
    const [CurrentNote, setCurrentNote]= React.useState([{Note: "Note"}]);
    const [displayedNote, setDisplayedNote] = React.useState([
        { NoteName: "My Note!", Text: "My Very First Note!", DateTime: "October 22nd 2021 4:00pm"}
    ]);

    //once clicked not is clicked it changes the color and plays animation
     const [ClickButtonColor, setClickButtonColor] = useState(false);

       //adds the grow effect for notemenu
    const [AnimationNoteView, setAnimationNoteView] =useState("MobileMenuElementAppear NoteFlexSm");

    /*Used to clear Note UI in other functions*/
    function ClearNoteforNew(){
        document.getElementById("Title").value = "";
        document.getElementById("NoteText").value= "";
        setBtnTrigger(true);
        console.log(BtnTrigger);
    };

    function NoteMenuClose(){
        //adds the shrink animation class to notemenu
     setAnimationMenu("PadSm MobileNoteMenuShrink");
     setAnimationNoteView(" MobileMenuElementAppear NoteFlexSm MobileMenuGrow");
    }
   
    /*removes note input from DOM*/
    function MobileClearNoteforNew(){
        ClearNoteforNew();
        NoteMenuClose();
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

          /* Opens the clicked note button, and closes the Note menu*/
    const GetNoteMobile= e=>{
        setClickButtonColor(true);
        /*Working here*/
        NoteMenuClose();
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
    setClickButtonColor(false);
     
    };


    return(

        <div id="NoteMenu" className={NoteMenuIsActive ? " PadSm MobileMenuGrow" :  AnimationMenu}>
            <div id="NoteContentControler" className={NoteMenuContentAppearActive ?  "NoteControlFlex MobileMenuElementAppear": "NoteControlFlex"}>
               
             <div className="CloseNoteMenu" onClick={NoteMenuClose}></div>

             <div className="PadTitle">Notes</div>

            <button  onClick={MobileClearNoteforNew}className="CreateButtonSm" >Create New Note +</button>
           
            <div className="ClickMeDiv">Click to See Your Note</div>
           <div id="SavedNotes" className="SavedNotesFlexSm">
            {displayedNote.map(note =>{

                return(
                    <div>
                    <div className="NoteDate">{note.DateTime}</div>
                    <button id={note.Index} key={note.Index} onClick={GetNoteMobile}className={ClickButtonColor ? "SelectedNoteItem" :"NoteItem" }>{note.NoteName}</button>
                    </div>
    )})}                    
           </div>

        </div>

        </div>

        

    )
};

export default NoteMenu