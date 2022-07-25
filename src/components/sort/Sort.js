import React from 'react';
import classes from './Sort.module.css'

function Sort(props) {
    return (
        <div className={classes.sort}>
            <h5>Сортировать по:</h5>
            <ul className={classes.ul}>
                <li><a href="#">Популярности</a></li>
                <li><a href="#">Рейтингу</a></li>
                <li><a href="#">Уровень силы</a></li>
            </ul>
        </div>
    );
}

export default Sort;