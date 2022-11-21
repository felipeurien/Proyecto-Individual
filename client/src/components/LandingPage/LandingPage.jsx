import React from 'react';
import {Link} from 'react-router-dom';
import "./LandingPage.css"

export default function LandingPage(){
    return(
        <div className='background'>
            <h1>Videogames</h1>
            <Link to = '/home'>
                <button>Enter</button>
            </Link>
            {/* <img src='https://c.tenor.com/Jlt4lQU4M8kAAAAd/rock-the-rock.gif'/> */}
        </div>
    )
}