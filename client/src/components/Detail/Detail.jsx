import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail } from "../../actions/index"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Detail.css"

export default function Details(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(props.match.params.id)
        dispatch(clearDetail())
        dispatch(getDetail(props.match.params.id))
    },[])

    const myGame = useSelector((state) => state.detail)

    return (
        <div className="detail_container">
            {
                myGame.length > 0 ?
                <div> 
                    <Link to= '/home'><button></button></Link>
                    <div>
                        <h3>{myGame[0].name}</h3>
                        <img src={myGame[0].img} alt='Img not found'/>
                        <p>{myGame[0].description}</p>
                        <p>{myGame[0].released}</p>
                        <p>{myGame[0].rating}</p>
                        <p>{!myGame[0].createdInDB ? myGame[0].genres.join(" | ") : myGame[0].genres.map(g => g.name + (' ')).join(" | ")}</p>
                        <p>{myGame[0].platforms.join(" | ")}</p>
                    </div> 
                    
                        
                           
                </div>
                : <p>Loading...</p>
            }
            
        </div>
    )
}