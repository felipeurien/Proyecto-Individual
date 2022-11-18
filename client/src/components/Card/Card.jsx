import React from "react";
import "./Card.css"

export default function Card({ name, image, genres, rating, released}){


    return(
        <div>
            <div>
                <div>
                    <img src= { image } alt="Img Not Found" width="200px" height="250px" />
                </div>
                <div className="flip_card_back">
                    <h1>{ name }</h1>
                    <p>Rating: { rating ? rating : "Not Available"}</p>
                    <p>Released: { released }</p>
                    <p>{ genres.map((genres) => { if(!genres.name) { 
                        return `${genres}` 
                        } else { 
                            return genres.name
                        }}).join(" | ")} </p>
                </div>
                
            </div>
            
            
        
        </div>
    )
}
