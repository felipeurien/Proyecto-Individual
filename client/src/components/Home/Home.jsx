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
    
}