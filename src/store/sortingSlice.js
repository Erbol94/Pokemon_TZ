// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getSortPokemon = createAsyncThunk(
//     'getSortPokemon',
//     async(limit = 10, {dispatch})=>{
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
//         const data = await response.json()
//         const results = await data.results
//         const sortedPokemon = []
//         for(let i = 0; i < limit; i++){
//             const res = await fetch(results[i].url)
//             const data = await res.json()
//             sortedPokemon.push({info: data, ...results[i]})
//         }   
//         const sorted = sortedPokemon.sort((a,b)=> a.info.base_experience > b.info.base_experience ? 1 : -1)
//         dispatch(setSorting(sorted))
//     }
// )

// const sortingSlice = createSlice({
//     name: 'sorting',
//     initialState: {
//         sort: []
//     },
//     reducers: {
//         setSorting(state, action){
//             state.sort = action.payload
//         } 
//     }
// })

// export default sortingSlice.reducer
// export const {setSorting} = sortingSlice.actions