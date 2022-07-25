import React, { useEffect } from 'react';
import classes from './Preview.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemon } from '../store/pokeSlice'
import { getSortExp, getSortWeight } from '../store/pokeSlice'
import Filters from './Filters/Filters';
import { CircularProgress } from '@mui/material'


function Preview() {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokeReducer.pokemon)
    const loading = useSelector(state => state.pokeReducer.isLoading)
    
    useEffect(() => {
        dispatch(getPokemon())
    }, [])
    
    return (
        <div className={classes.main}>
            <div className={classes.filters}>
                <div className={classes.filters_inner}>
                    <Filters />
                </div>
            </div>
            <div className={classes.pokemons}>
                <div className={classes.sorting}>
                    <h5>Сортировать по:</h5>
                    <ul>
                        <li onClick={()=> dispatch(getSortExp())}>По опыту</li>
                        <li onClick={()=> dispatch(getPokemon())}>По росту</li>
                        <li onClick={()=> dispatch(getSortWeight())}>По весу</li>
                    </ul>
                </div>
                <div className={classes.card}>
                    {loading
                        ?
                        <CircularProgress />
                        :
                        pokemon.slice(0, 4).map((todo, index) =>
                            <Link
                                style={{textDecoration: 'none', color:'#121212'}}
                                to={`/info/${todo.info.id}`}
                                key={index}>
                                <img className={classes.img} src={todo.info.sprites.other.dream_world.front_default} alt="" />
                                <p>{todo.name}</p>
                            </Link>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Preview;