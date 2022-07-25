import {configureStore} from '@reduxjs/toolkit'
import pokeReducer from  './pokeSlice'

export default configureStore({
    reducer:{
        pokeReducer: pokeReducer,
    }
})