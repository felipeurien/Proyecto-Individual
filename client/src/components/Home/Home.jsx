import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByAbc, filterByRating, getVideogames, filterGames } from '../../actions';
import { Link  } from 'react-router-dom';
import Card from '../Card/Card';
import "./Home.css"
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
        setOrder("")
    }
    
    return(
        <div>
            {/* <button onClick={e => {handleClick(e)}}></button> */}

            <SearchBar className = "searchBar"/>
            
            <div>

                <select onChange={ e => handleSortNames(e)}>
                    <option value="" disabled selected>By Name</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>

                <select onChange={ e => handleSortRatings(e)}>
                    <option value="" disabled selected>By Rating</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>

                <select onChange={ e => handleFilterGames(e)}>
                    <option value="" disabled selected>Filter Games</option>
                    <option value='all'>All Videogames</option>
                    <option value='created'>Created</option>
                    <option value='api'>Api</option>
                </select>

            </div> 
           
            {
                allVideogames.length === 0 ? <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:null
            }

            <div className='card_container'>
                {
                    vgPaginaActual?.map((v, id) => {
                        return(
                            <div>
                                <Link className='linkeru' key={id} to={ `/videogames/${v.id}`}>
                                        <Card
                                        name={v.name}
                                        image={v.img} 
                                        genres={v.genres} 
                                        rating={v.rating} 
                                        released={v.released}
                                        />
                                </Link>
                            </div>
                        )
                        
                    })
                }
            </div>

            <div>
            <Paginado
                vgPorPagina={vgPorPagina}
                allVideogames={allVideogames.length}
                paginado={paginado}
                />
            </div>

            <Link to = '/videogame'>
                <button>Create Videogame</button>
            </Link>

        </div>
    )
}