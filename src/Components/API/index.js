import React, {useState } from 'react';


function API (){

    const [EventMenuIsActive, setEventMenuIsActive] = useState(false);
    const [EventMenuContentAppearActive, setEventMenuContentAppearActive]= useState(false);
    function EventMenuClose(){
        /*Show divisions*/
            document.getElementById("NoteInfoSectionSm").style.display = "flex";
            document.getElementById("NoteFlexSmBox").style.display = "flex";
            document.getElementById("EventMenuButton").style.display = "flex";
            document.getElementById("EventContentControler").style.display = "none";
            document.getElementById("MenuButton").style.display ="flex";
            document.getElementById("NoteMenu").style.display= "flex";
            document.getElementById("EventMenu").style.width ="1%";
            document.getElementById("ShrinkDiv").style.display = "none";
            document.getElementById("ShrinkDiv").style.width = "0.002%";
            /* resets States so animation will replay*/
            setEventMenuIsActive(false);
            setEventMenuContentAppearActive(false);
         
        }

return(

    <div className='APIchoiceFlex'>
        <div className='APIItems'></div>
        <div className='APIItems'></div>
        <div className='APIItems'></div>
        <div className='APIItems'></div>
        <div className="CloseEventNoteMenu" onClick={EventMenuClose}></div>
    </div>

)



}

export default API