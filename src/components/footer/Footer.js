import React from 'react';
import classes from './Footer.module.css'
import instSvg from '../../assets/img/instagram.svg'
import faceSvg from '../../assets/img/facebook.svg'
import teleSvg from '../../assets/img/telegramm.svg'
import tubeSvg from '../../assets/img/youtube.svg'

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footer_inner}>
                <h5>Подпишитесь на нас!</h5>
                <ul className={classes.ul}>
                    <li><a href="/"><img src={instSvg} alt="" /></a></li>
                    <li><a href="/"><img src={faceSvg} alt="" /></a></li>
                    <li><a href="/"><img src={teleSvg} alt="" /></a></li>
                    <li><a href="/"><img src={tubeSvg} alt="" /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;