import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getPokemon = createAsyncThunk(
    'getPokemon',
    async(limit = 10, {dispatch})=>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
        const data = await response.json()
        const results = await data.results
        const sortedPokemon = []
        for(let i = 0; i < limit; i++){
            const res = await fetch(results[i].url)
            const data = await res.json()
            sortedPokemon.push({info: data, ...results[i]})
        }   
        const sorted = sortedPokemon.sort((a,b)=> b.info.height > a.info.height ? 1 : -1)
        dispatch(getList(sorted))
    }
)

export const getSortExp = createAsyncThunk(
    'getSortPokemon',
    async(limit = 10, {dispatch})=>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
        const data = await response.json()
        const results = await data.results
        const sortedPokemon = []
        for(let i = 0; i < limit; i++){
            const res = await fetch(results[i].url)
            const data = await res.json()
            sortedPokemon.push({info: data, ...results[i]})
        }   
        const sorted = sortedPokemon.sort((a,b)=> b.info.base_experience > a.info.base_experience ? 1 : -1)
        dispatch(setSorting(sorted))
    }
)

export const getSortWeight = createAsyncThunk(
    'getSortWeight',
    async(limit = 10, {dispatch})=>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
        const data = await response.json()
        const results = await data.results
        const sortedPokemon = []
        for(let i = 0; i < limit; i++){
            const res = await fetch(results[i].url)
            const data = await res.json()
            sortedPokemon.push({info: data, ...results[i]})
        }   
        const sorted = sortedPokemon.sort((a,b)=> b.info.weight > a.info.weight ? 1 : -1)
        dispatch(setSorting(sorted))
    }
)

const pokeSlice = createSlice({
    name: 'pokeSlice',
    initialState: {
        pokemon: [],
        onePokemon: [],
        message: null,
        isLoading: true
    },
    reducers: {
        getList(state, action){
            state.pokemon = action.payload
            state.isLoading = false
        },
        setSorting(state, action){
            state.pokemon = action.payload
            state.isLoading = false
        }
    }
})
export const {getList, setSorting} = pokeSlice.actions  
export default pokeSlice.reducer