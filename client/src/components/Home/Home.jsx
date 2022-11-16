import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByAbc, filterByRating, getVideogames, filterGames } from '../../actions';
import { Link  } from 'react-router-dom';
import Card from '../Card/Card';
import "./home.css"
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";

export default function Home () {
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.videogames)
    const [ order, setOrder ] = useState("")
    const [ paginaActual, setPaginaActual ] = useState(1)
    const [ vgPorPagina, setPgPorPagina ] = useState(15)
    const indexLast = paginaActual * vgPorPagina
    const indexFirst = indexLast - vgPorPagina
    const vgPaginaActual = allVideogames.slice(indexFirst, indexLast)

    function handleSortNames (e) {
        e.preventDefault();
        dispatch(filterByAbc(e.target.value))
        setPaginaActual(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleSortRatings (e) {
        e.preventDefault();
        dispatch(filterByRating(e.target.value))
        setPaginaActual(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    const paginado = (numPagina) => {
        setPaginaActual(numPagina)
    }

    useEffect (() => {
        dispatch(getVideogames())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames());
        setPaginaActual(1)
    }
    function handleFilterGames(e){
        e.preventDefault()
        dispatch(filterGames(e.target.value))
    }
    
    return(
        <div className='home'>
            <button className='button_0' onClick={e => {handleClick(e)}}></button>

            <SearchBar className = "searchBar"/>
            
            <div className='filters'>

                <select className='button_1' onChange={ e => handleSortNames(e)}>

                </select>

                <select className='button_2' onChange={ e => handleSortRatings(e)}>
                    
                </select>

                <select className='button_3' onChange={ e => handleFilterGames(e)}>
                    
                </select>

            </div> 
            
            <div className='cards_grid'></div>

            <div className='Paginado'></div>

            <Link to = '/videogame'></Link>

        </div>
    )
}