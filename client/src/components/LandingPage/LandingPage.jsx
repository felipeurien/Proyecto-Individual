import React from 'react';
import {Link} from 'react-router-dom';
import "./LandingPage.css"

export default function LandingPage(){
    return(
        <div className='background_landing'>
            <div className=''>
                <div class="container">
                    <div class="neon">VIDEO </div>
                    <div class="flux">GAMES </div>
                </div>
                <Link to = '/home'>
                    <div id="outer">
                    <div class="button_slide slide_down">ENTER</div>
                    <br /> <br /><br />
                    
                    </div>
                </Link>
            </div>
        </div>
    )
}

