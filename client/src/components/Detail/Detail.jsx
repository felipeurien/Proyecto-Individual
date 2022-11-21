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
    console.log(myGame[0])
    return (
        <div>
            {
                myGame.length > 0 ?
                <div className="div_afuera"> 
                    <Link to= '/home' className='linkeru' >
                        <div className="twerk">
                            <div className="boton"></div>
                            <div className="boton_home">Home</div>
                        </div>
                    </Link>
                    <div className="detail_container">
                        <h3>{myGame[0].name}</h3>
                        <img className='detail_img' src={myGame[0].img} alt='Img not found'/>
                        <p>{myGame[0].description}</p>
                        <p>{myGame[0].released}</p>
                        <p>{myGame[0].rating}</p>
                        <p>{myGame[0].createdInDb ? myGame[0].genres.map(g => g.name + (' ')).join(" | ") : myGame[0].genres.join(" | ")}</p>
                        <p>{myGame[0].platforms.join(" | ")}</p>
                    </div> 
                    
                        
                           
                </div>
                : <p>Loading...</p>
            }
            
        </div>
    )
}