import React from 'react';
import { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { postVideogame, getGenres, getPlatforms } from '../../actions/index';
import { useDispatch, useSelector } from "react-redux";
import "./VideogameCreate.css"

function validate(input) {
    let errors = {}

    if (!input.name) {
        errors.name = "Name is required";
      } else if (input.name.length > 50) {
        errors.name = "Name is too long";
      }
  
      if (!input.description) {
        errors.description = "Description is required ";
      } else if (input.description.length > 1500) {
        errors.description = "Description is too long. (Max = 1500 characters)";
      }
  
      if (!input.rating) {
        errors.rating = "Rating is required";
      } else if (input.rating > 5 || input.rating < 0) {
        errors.rating = "Rating must range between 0 to 5";
      }
  
      if (!input.released) {
        errors.released = "Date of release is required";
      } else if (input.released.length < 10) {
        errors.released = "Date of release is to long";
      }
      if (!input.img) {
        errors.img = "Image URL is required";
      }
  
      if (!input.genre[0]) {
        errors.genre = "At least one Genre is required ";
      }
  
      if (!input.platforms[0]) {
        errors.platforms = "At least one Platform is required";
      }
  
      return errors;
}

export default function VideogameCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const genre = useSelector((state) => state.genres)
    const platforms = useSelector((state) => state.platforms)
    const [ errors, setErrors ] = useState({})

    const [ input, setInput ] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        img: "",
        platforms: [],
        genre: [],
    })

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelectGenres(e){
        if (!input.genre.includes(e.target.value)) {
            setInput({
                ...input,
                genre: [...input.genre, e.target.value]
            })
            setErrors(validate({
                ...input,
                genre: [...input.genre, e.target.value]
            }))
        } else {
            setInput({
                ...input
            })
        }
    }
        
        /* function handleSelectPlatforms(e){
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value]
            })
            setErrors(validate({
                ...input,
                platforms: [...input.platforms, e.target.value]
            })
            )
        } */

        function handleSelectPlatforms(e){
            if (!input.platforms.includes(e.target.value)) {
                setInput({
                    ...input,
                    platforms: [...input.platforms, e.target.value]
                })
                setErrors(validate({
                    ...input,
                    platforms: [...input.platforms, e.target.value]
                }))
            } else {
                setInput({
                    ...input
                })
            }
            
        }

        function handleDeleteGenres(e){
            setInput({
                ...input,
                genre: input.genre.filter((param) => param !== e)
            })
        }
    
        function handleDeletePlatforms(e){
            setInput({
                ...input,
                platforms: input.platforms.filter((param) => param !== e)
            })
        }
    
        function handleSubmit(e){
            console.log(input)
            e.preventDefault()
            let crear = {
                name: input.name,
                description: input.description,
                released: input.released,
                rating: input.rating,
                img: input.img,
                platforms: input.platforms,
                genre: input.genre,
            }
            if(errors.length > 0){
                alert("Complete all items")
            } else{
                dispatch(postVideogame(crear))
                setInput({
                    name: '',
                    description: '',
                    released: '',
                    rating: '',
                    img: "",
                    platforms: [],
                    genre: [],
                })
                alert('Videogame created succesfully')
                history.push('/home')
            }
        }

    return (
        <div>
            <Link className="linkeru" to= '/home'>
                        <div className="twerk">
                            <div className="boton"></div>
                            <div className="boton_home">Home</div>
                        </div>
            </Link>
            <form className='create' onSubmit={(e) => handleSubmit(e)}>
            <div className='create'>

                {/* NAME */}
                <div>
                    <label>Name</label>
                    <input
                    type='text'
                    value={input.name}
                    name='name'
                    placeholder='Videogame Name...'
                    onChange={handleChange}
                    />
                    {
                        errors.name && (
                            <p>{errors.name}</p>
                            )
                        }
                </div>

                {/* DESCRIPTION */}
                <div>
                    <label>Description</label>  
                    <input
                    type='text'
                    value={input.description}
                    name='description'
                    placeholder='Description...'
                    onChange={handleChange}
                    />
                    {
                        errors.description && (
                            <p>{errors.description}</p>
                            )
                        }
                </div>
                
                {/* RELEASE */}
                <div>
                    <label>Release Date</label>
                    <input
                    type='date'
                    value={input.released}
                    name='released'
                    onChange={handleChange}
                    />
                    {
                        errors.released && (
                            <p>{errors.released}</p>
                            )
                        }
                </div>

                {/* RATING */}
                <div>
                    <label>Rating</label>
                    <input
                    type='number'
                    value={input.rating}
                    name='rating'
                    placeholder='Rating...'
                    onChange={handleChange}
                    />
                    {
                        errors.rating && (
                            <p>{errors.rating}</p>
                            )
                        }
                </div>

                {/* IMAGE */}
                <div>
                    <label>Img</label>
                    <input
                    type='text'
                    value={input.img}
                    name='img'
                    placeholder='Img URL...'
                    onChange={handleChange}
                    />
                    {
                        errors.img && (
                            <p>{errors.img}</p>
                            )
                        }
                </div>

                {/* GENRE */}
                {/* CREATE GENRE */}
                <div>
                    <div>
                        <select onChange={(e) => handleSelectGenres(e)}>
                        <option>Genres</option>
                        {genre?.map((g) => {
                            return (
                                <option value={g.name}>{g.name}</option>
                            )
                        })}
                        </select>
                        {
                            errors.genre && (
                                <span>{errors.genre}</span>
                            )
                        }
                    </div>
                {/* DELETE GENRE */}
                    <div>
                        {
                            input.genre?.map((e) => {
                                return (
                                    <>
                                    <div>
                                        <div>{e}</div>
                                        <button onClick={() => handleDeleteGenres(e)}>X</button>
                                    </div>
                                    </>
                                )
                            })
                        }{" "}
                    </div>
                </div>

                {/* PLATFORM */}
                {/* CREATE PLATFORM */}
                <div>

                <div>
                    <select onChange={(e) => handleSelectPlatforms(e)}>
                        <option>Platforms</option>
                        {platforms?.map((e) => {
                            return (
                                <option value={e.name}>
                                    {e.name}
                                </option>
                            )
                        })}
                    </select>
                    {
                        errors.platforms && (
                            <span>{errors.platforms}</span>
                            )
                        }
                </div>
                {/* DELETE PLATFORM */}
                <div>
                    {
                        input.platforms?.map((e) => {
                            return (
                                <>
                                <div>
                                    <div>{e}</div>
                                    <button type="button" onClick={() => handleDeletePlatforms(e)}>X</button>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                
                </div>

                

            </div>
                {
                    Object.keys(errors).length ? (
                        <div>
                            <input type="submit" disabled name="Send" />
                        </div>
                    ) : (
                        <div>
                            <input type="submit" name="Send" />
                        </div>
                    )
                }
            </form>
        </div>
    )

}


