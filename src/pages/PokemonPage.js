import React from 'react';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Preview from '../components/Preview';
import classes from './PokemonPage.module.css'



function PokemonPage(props) {
    
    return (
        <div className={classes.container}>
        <Header/> 
            <Preview />
        <Footer/>
        </div>
    );
}

export default PokemonPage;