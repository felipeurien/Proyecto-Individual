import React from "react";
import "./Card.css"

export default function Card({ name, image, genres, rating, released}){


    return(
            <div className="card">
                <div className="image_container">
                    <img className='img' src= { image } alt="Img Not Found" width="200px" height="250px" />
                </div>
                <div>
                    <h2>{ name }</h2>
                    <p>Rating: { rating ? rating : "Not Available"}</p>
                    <p>Released: { released }</p>
                    <p>{ genres.map((genres) => { if(!genres.name) { 
                        return `${genres}` 
                        } else { 
                            return genres.name
                        }}).join(" | ")} </p>
                </div>
                
            </div>
    )
}
