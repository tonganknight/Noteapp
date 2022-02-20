import React, {useEffect, useState } from 'react';
import {Breakpoint} from 'react-socks'
import DatePicker from 'sassy-datepicker';
import { Modal, Button} from 'react-bootstrap';

var moment = require('moment');

function MobileUI(){


    const TimeNow = moment().format("MMMM Do YYYY, h:mm a");
    const [displayedNote, setDisplayedNote] = React.useState([
        { NoteName: "My Note!", Text: "My Very First Note!", DateTime: "October 22nd 2021 4:00pm"}
    ]);
    const [Events, setEvents]= React.useState([
        {EventTitle: "Doctors Appointment", EventDate: "December 1, 2021", EventDetails: "Bring the Eggnog"}
    ]);
    /*State to manage the Date picked in the SM Modal*/
    const [SmDate, setSmDate] = React.useState([{ SmNote: "Note"}]);
    /*controls the state of the NoteButtons for CRUD*/
    const [BtnTrigger, setBtnTrigger]= React.useState(true);
    const [DeleteEventButton, SetDeleteEventButton]= React.useState(false);
    /*controls the current clicked note passes state it for array manipulation*/
    const [CurrentNote, setCurrentNote]= React.useState([{Note: "Note"}]);
    const [ShowDateModal, setShowDateModal] = useState(false);


    //CRUD Methods

    function CreateNote (){
        let Title =  document.getElementById("Title").value;
        let NoteTime = TimeNow;
        let NoteText = document.getElementById("NoteText").value;
        /*Check displayedNote for duplicate Note Titles, or Note Text
        if there are none, they should return -1*/ 
        let CheckForTitle = displayedNote.findIndex(function (TitleName) {
            return TitleName.NoteName === `${Title}`;
        });
        console.log(CheckForTitle);
        /* if CheckForTitle does not return -1// meaning if it is not a unique
        title. Open the Modal */
        if(CheckForTitle !== -1){
            window.alert("You already have a Note Called this.Please make sure your Title is unique.");
            return;
        }
        /* if user tires to sumbit a blank title*/
        if(Title === ""){
            window.alert("You Note must have a Title");
            return;
        }
        /*log all three text fields on creation for testing*/
        console.log(Title);
        console.log(NoteTime);
        console.log(NoteText);
        /* create a new object with the text area entries and save them to 
        DisplayedNote state */
        const newdisplayedNote = [...displayedNote, {NoteName: Title, Text: NoteText, DateTime: TimeNow}];
        console.log(newdisplayedNote);
        setDisplayedNote(newdisplayedNote);
        /*set the button state to show the Update and Delete Buttons*/
        setBtnTrigger(!BtnTrigger);
    };

    /*Used to clear Note UI in other functions*/
    function ClearNoteforNew(){
        document.getElementById("Title").value = "";
        document.getElementById("NoteText").value= "";
        setBtnTrigger(true);
        console.log(BtnTrigger);
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

    function DeleteNote(){
    /* find the index of the Title value, and return its undex*/
    let Title = document.getElementById("Title").value;
    let NoteNameIndex = displayedNote.findIndex(function (TitleName) {
            return TitleName.NoteName === `${Title}`;
    });
    console.log(NoteNameIndex);
    /*splice the returned index from the displayNote*/
    let NewDisplayedNote = [...displayedNote];
    NewDisplayedNote.splice(NoteNameIndex, 1);
    console.log(NewDisplayedNote);
    /* update the state of with the new displayedNote */
    setDisplayedNote(NewDisplayedNote);
    /*set the Button state to create Note button, and clear all text area fields */
    setBtnTrigger(true);
    ClearNoteforNew()
    };

    function UpdateNote(){  
        /*creating targets */
        let NewDisplayedNote =[...displayedNote];
        let NewTitle = document.getElementById("Title").value;
        let NewText = document.getElementById("NoteText").value;
        let NoteTime = TimeNow;
       /*Taking the Current saved Note. This should be the note you clicked on 
       then Destructing that to get the Title of the note you clicked*/
        let NowNote = CurrentNote[0]
        let Current= NowNote.Note
        /*Finding by CurrentNote in displayedNote and returning the index*/
        let NoteNameIndex = displayedNote.findIndex(function (TitleName) {
        return TitleName.NoteName === `${Current}`;
        });
        /*taking that NoteNameIndex's Index and splicing it out, and setting 
        the text area data as the new object in the array then update
        displayedNote*/
        NewDisplayedNote.splice(NoteNameIndex, 1, {NoteName:`${NewTitle}`, Text: `${NewText}`, DateTime: `${NoteTime}` });
        setDisplayedNote(NewDisplayedNote);
    };

    /*Mobile Functions*/

/*Opens Notes Menu*/
function NoteMenuShow(){
    /*hide flexboxes */
      document.getElementById("NoteInfoSectionSm").style.display = "none";
      document.getElementById("NoteFlexSmBox").style.display = "none";
      document.getElementById("EventMenuButton").style.display = "none";
      document.getElementById("EventMenu").style.display = "none";
    
    /*resize menu and show content*/
      document.getElementById("NoteMenu").style.width="100%";
      document.getElementById("MenuButton").style.display= "none"
      document.getElementById("NoteContentControler").style.display = "flex"
    }
    
    /* Opens Event Menu*/
    function EventMenuShow(){
        /*hide divisions*/
        document.getElementById("NoteInfoSectionSm").style.display = "none";
        document.getElementById("NoteFlexSmBox").style.display = "none";
        document.getElementById("EventMenuButton").style.display = "none";
        document.getElementById("EventContentControler").style.display = "flex";
        document.getElementById("MenuButton").style.display ="none";
        document.getElementById("NoteMenu").style.display= "none";
    
        document.getElementById("EventMenu").style.width ="100%";
        
    }
    /*Closes Event Menu*/
    function EventMenuClose(){
    /*Show divisions*/
        document.getElementById("NoteInfoSectionSm").style.display = "flex";
        document.getElementById("NoteFlexSmBox").style.display = "flex";
        document.getElementById("EventMenuButton").style.display = "flex";
        document.getElementById("EventContentControler").style.display = "none";
        document.getElementById("MenuButton").style.display ="flex";
        document.getElementById("NoteMenu").style.display= "flex";
    
        document.getElementById("EventMenu").style.width ="1%";
    }
    
    /* Closes Note Menu*/
    function NoteMenuClose(){
    
        /*changes display of flex boxes to flex so we can see them*/
        document.getElementById("NoteInfoSectionSm").style.display = "flex";
        document.getElementById("NoteFlexSmBox").style.display = "flex";
        document.getElementById("EventMenuButton").style.display = "flex";
        document.getElementById("EventMenu").style.display = "flex";
    
        /*resizes menu and hides content. Shows main flex"*/
        document.getElementById("NoteMenu").style.width="1%";
        document.getElementById("MenuButton").style.display= "flex";
        document.getElementById("NoteContentControler").style.display = "none";
    }
    
    /*removes note input from DOM*/
    function MobileClearNoteforNew(){
        ClearNoteforNew();
        NoteMenuClose();
    }
    
    /*Creates a Note, and opens Note Menu*/
    function CreateNoteMobile(){
        CreateNote();
        NoteMenuShow();
    }
    
    /* Deletes a Note and opens Note Menu*/
    function DeleteNoteMobile(){
        DeleteNote();
        NoteMenuShow();
    }
    
    /* Updates a currently selected Note, and opens the Note Menu*/
    function UpdateNoteMobile(){
        UpdateNote();
        NoteMenuShow();
    }
    
    /* Opens the clicked note button, and closes the Note menu*/
    const GetNoteMobile= e=>{
        /*Working here*/
        NoteMenuClose()
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
    
    /* Gets the Event Clicked and displays the Event info in the Event menu*/
    const GetEvent = e =>{
    e.preventDefault();
    /*Targets the HTML of the Button Clicked*/
    let ClickedButton = e.target.innerHTML;
    /*Searches the Events Object for the InnerHTML of the Button and returns an indeex*/
    let EventTitleIndex = Events.findIndex(function (EventIndex){
        return EventIndex.EventTitle === `${ClickedButton}`;
    })
    /*de-structure the Events Object*/ 
    let NewEvent= Events[EventTitleIndex];
    let EventTitle = NewEvent.EventTitle;
    let EventTime = NewEvent.EventDate;
    let EventContent = NewEvent.EventDetails;
    
    /* assigning structured Events Object to DOM*/
    document.getElementById("EventTime").innerText = EventTime;
    document.getElementById("EventTitle").innerText = EventTitle;
    document.getElementById("EventDetails").innerText =EventContent;
    
    /*activates the Delete Button*/
    SetDeleteEventButton(true);
    }
    
    /* Fires when the Create Event Button is clicked*/
    const onChange = (date) => {
        /* convert to a string*/
        let DatePulled = date.toString();
        /* convert date to Moment.js format */
        let dateObject = new Date(DatePulled);
        let momentObject = moment(dateObject);
        let momentString = momentObject.format('MMMM Do YYYY'); 
        console.log("this is the date pulled " + momentString);
        /*splice old value and add current date picker selection*/
        let NewArrDate =[...SmDate];
        NewArrDate.splice(0, 1, {SmNote: `${momentString}`});
        console.log(NewArrDate);
        /* Save state*/
        setSmDate(NewArrDate);
        
      };
    
    const HandelDateModalOpen= () =>{
        /*remove Events Menu */
        document.getElementById("MainFlexBoxSm").style.display = "none";
        document.getElementById("EventContentControler").style.display = "none";
        document.getElementById("EventMenu").style.display ='none';
        /* Activates the Modal By Changing the State*/
        setShowDateModal(true);
    
    }
    
    const HandelDateModalClose= () => {
        /*Pull Event Info From the DOM in the Modal*/
        let ETitle = document.getElementById("SmModalTitleInput").value;
        if(ETitle === ""){
            window.alert("You must Name your Event");
            return;
        }
       let EDate = SmDate[0].SmNote
        /* Update the Events State*/
        let NewEvent = [...Events, 
            {EventTitle: `${ETitle}`, EventDate: `${EDate}`, EventDetails: "Drag and Drop Note Here!"}];
        setEvents(NewEvent);
        console.log(Events); 
        document.getElementById("MainFlexBoxSm").style.display = "flex";
        document.getElementById("EventContentControler").style.display = "flex";
        document.getElementById("EventMenu").style.display ='flex';
    
        /*Shut down the Modal*/
        setShowDateModal(false);
    }
    
    function ClearEventDisplay(){
        /*Erase the Event Details of currently displayed note*/
        document.getElementById("EventTitle").innerHTML = "";
        document.getElementById("EventTime").innerHTML = "";
        document.getElementById("EventDetails").innerHTML ="";
        /*Set the Display Button to not Display*/
        SetDeleteEventButton(false);
    }
    
    function DeleteEvent(){
        let targetDelete = document.getElementById("EventTitle").innerHTML;
        let EventIndex = Events.findIndex(function (IndexOfEvent){
            return IndexOfEvent.EventTitle === `${targetDelete}`
        });
        let NewEvents = [...Events];
        NewEvents.splice(EventIndex, 1);
        setEvents(NewEvents);
        ClearEventDisplay();
    }
    
    function RemoveEventButton(){
        if(DeleteEventButton === true){
            return(
                <button className="DeleteEventButtonSm" onClick={DeleteEvent} >Delete Event</button>
            )
        }
        if(DeleteEventButton === false){
            return(
                <div></div>
            )
        }
    
    };
    
    const  AssignMobileNote = e =>{
        e.preventDefault();
        /*Targets the HTML of the Button Clicked*/
        let NoteButtonTitle = e.target.innerHTML;
        let ETitle = document.getElementById("EventTitle").innerHTML;
        console.log(ETitle);
          if(DeleteEventButton === false){
            window.alert("You must select a Event before assigning it a note!");
            }
    
          if(DeleteEventButton === true){
              //Look up Note Button that was clicked
            let NoteLookup = displayedNote.findIndex(function (NoteIndex){
            return NoteIndex.NoteName === `${NoteButtonTitle}`
            })
    
            //look up Event that is selected
            let EventTitleIndex = Events.findIndex(function (EventIndex){
                return EventIndex.EventTitle === `${ETitle}`
                
            })
            //Destructuring DisplayedNote
            let NoteTarget = displayedNote[NoteLookup];
            let NoteText = NoteTarget.Text;
    
            //Destructuring Events
            let NewEvent = [...Events]
            let FindEvent = Events[EventTitleIndex];
            let EventNote = FindEvent.EventNote;
            let EventTitle = FindEvent.EventTitle
            let EventDate = FindEvent.EventDate
    
            // Updates the Events. It removes the old Event and adds the new one with the update Note text we looked up
            NewEvent.splice(EventTitleIndex, 1, {EventTitle:`${EventTitle}`, EventDate: `${EventDate}`, EventDetails: `${NoteText}` });
            setEvents(NewEvent);
    
            // Since React is Immutable, this assigns the displayed note to the note text we looked up. That way it reflects instantly
            document.getElementById("EventDetails").innerHTML = NoteText
    
        }
    }
    
    function ButtonView() {
        if(BtnTrigger === false){
            return(

                <Breakpoint small down>
                <div className="NoteButtonFlex">
                 <button className="DeleteNoteButtonSm" onClick={DeleteNoteMobile}>Delete Note</button>
                 <button className="UpdateNoteButtonSm" onClick={UpdateNoteMobile}>Update Note</button>
                </div>
                </Breakpoint>
                
            )
        }

        if(BtnTrigger === true){
            return(
                    <Breakpoint small down>
                    <div className="NoteButtonFlexSm">
                            <button className="CreateNoteButtonSm" onClick={CreateNoteMobile}>Create Note</button>
                    </div>
    
                    </Breakpoint>

          )
        }
    }

    return(

        <Breakpoint small down>

        <div id="MainFlexBoxSm" className="MainflexSm">

            <div id="NoteMenu" className="PadSm">
                <div id="NoteContentControler" className="NoteControlFlex">
                   
                 <div className="CloseNoteMenu" onClick={NoteMenuClose}></div>

                 <div className="PadTitle">Your Pad</div>

                <button  onClick={MobileClearNoteforNew}className="CreateButtonSm" >Create New Note +</button>
               
                <div className="ClickMeDiv">Click to See Your Note!</div>
               <div id="SavedNotes" className="SavedNotesFlexSm">
                {displayedNote.map(note =>{

                    return(
                        <div>
                        <div className="NoteDate">{note.DateTime}</div>
                        <button id={note.Index} key={note.Index} onClick={GetNoteMobile}className="NoteItem">{note.NoteName}</button>
                        </div>
        )})}                    
               </div>

            </div>

            </div>

            <div id="MenuButton"className="PadButtonSm">
                <div className="MenuNoteButtonSm" onClick={NoteMenuShow}>Notes</div>
            </div>

            
            
                <div id="NoteFlexSmBox"className="NoteFlexSm">
                    <div id="NoteInfoSectionSm" className="NoteInfoSm">
                        <div className="NoteTitleSm">

                        <ButtonView/>

                        <input id="Title"  placeholder="Your Title Here" className="TitleinfoSm"></input>
                    </div>

                    <div className="NoteTimeSm"id="TimeStamp">{TimeNow}
                    </div>

                </div>

                <div className="NoteInfoText">
                    <textarea id="NoteText" placeholder="Your Note Here" className="NoteTextBoxSm"></textarea>
                </div>
                    
            </div>

            <div id="EventMenuButton" className="PadEventButtonSm">
                
                    <div className="MenuEventButtonSm" onClick={EventMenuShow}>Events</div>
                
            </div>
        
            <div id="EventMenu" className="PadEventSm">
                <div id="EventContentControler" className="EventControlFlex">
                    <div className="CloseEventNoteMenu" onClick={EventMenuClose}></div>
                    <div className="EventTitleSm">Events</div>
            <div id ="UpcomingEvents" className="UpcomingEventsFlexSm">
                    {Events.map((button, index) =>{
                    return(
                    <div>
                    <div className="NoteDate">{button.EventDate}</div>
                    <button  key={index} className="NoteItem" onClick={GetEvent}>{button.EventTitle}</button>
                    </div>

                    )})}
                
            </div> 

            <button className="CreateEventButtonSm" onClick={HandelDateModalOpen} > Create New Event +</button>
                
            <RemoveEventButton/>

                <Modal  className=" border-dark .modal-content"
                  size="lg"
                  show={ShowDateModal}
                  onHide={HandelDateModalClose}
                  backdrop="static"
                  aria-labelledby="example-modal-sizes-title-lg">
                      <div className="SmallModalSm">

                        <div className="SmallModalTitleSm">When?</div>
                        <DatePicker id="dateP" onChange={onChange}/>
                        <div className="SmallModalTitleSm">Event Title</div>
                        <input id="SmModalTitleInput" className="SmallModalEventTitle"></input>
                        <Button  className=" border-dark"variant="secondary" onClick={HandelDateModalClose}>
                        Finished
                        </Button>
                      </div>
                  
                </Modal>

                <div id="EventTime" className="SelectedEventTimeSm"></div>
                
                <div className="SelectedEventTitleFlexSm">
                <div id="EventTitle"className="SelectedEventTitleSm"></div>
                </div>

                <div className="SelectedEventDetailSm">Details</div>
                
                <div id="EventDetails" className="SelectedEventDetailsSm"></div>

                <div className="NoteAssignFlex">

                <div id="SavedNotes" className="SavedNotesEventsFlexSm">
                {displayedNote.map(note =>{

                    return(
                        <div>
                        <div className="NoteDate">{note.DateTime}</div>
                        <button id={note.Index} key={note.Index} onClick={AssignMobileNote} className="NoteItem">{note.NoteName}</button>
                        </div>
        )})}                    
               </div>
               
                </div>

                </div>
            </div>
            
        </div>

        </Breakpoint>

    )
};

export default MobileUI