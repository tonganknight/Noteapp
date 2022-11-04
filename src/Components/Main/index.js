import React, {useEffect, useState } from 'react';
import {Breakpoint} from 'react-socks'

import {FindInindexReturnposition} from '../Hooks/index';

import MobileUI from '../MobileUI';

var moment = require('moment');

function Main() {
    
    return(
        
<div className="LgFlex">

    <Breakpoint large up>

           
                <div className='LgTitle'>Welcome to React Thought!!</div>
                <div className="LgintroText">
                    Thanks for visiting! please scan the QR code.
                    This is a  program I built to show proficiency in React.
                    Its not ground breaking, or amazing its basic note app. That lets you
                    update all your calendars all at once. 
                </div>
                <div className='Lgimage'></div>

                



    </Breakpoint>

 



    <MobileUI/>

</div>
    )






       

    
};
export default Main