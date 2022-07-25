import React from 'react';
import classes from './Header.module.css'
import  {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div className={classes.header}>
            <ul className={classes.ul}>
                <li><Link to={'/'} className={classes.link}>Все покемоны</Link></li>
                <li><Link to={'/'} className={classes.link}>Помошь</Link></li>
                <li><Link to={'/'} className={classes.link}>Контакты</Link></li>
            </ul>
        </div>
    );
}

export default Header;