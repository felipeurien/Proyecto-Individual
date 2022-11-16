import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return(
        <div>
            <h1>Welcome 🗿</h1>
            <Link to = '/home'>
                <button>entra perra loca</button>
            </Link>
            {/* <img src='https://c.tenor.com/Jlt4lQU4M8kAAAAd/rock-the-rock.gif'/> */}
        </div>
    )
}