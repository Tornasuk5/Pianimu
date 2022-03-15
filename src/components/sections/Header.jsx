import React, {useEffect, useState} from 'react';
import { Link, Route } from "wouter";

const Header = props => {

    const [pag, setPag] = useState('home');

    const headerLinks = [
        <Link to='/' onClick={() => setPag('home')} className={pag === 'home' ? 'menu-link-active' : ''}>Home</Link>,
        <Link to='/sheets' onClick={() => setPag('sheets')} className={pag === 'sheets' ? 'menu-link-active' : ''}>Sheets</Link>,
        <Link to='/animes' onClick={() => setPag('animes')} className={pag === 'animes' ? 'menu-link-active' : ''}>Animes</Link>,
        <Link to='/visual-novels' onClick={() => setPag('visual-novels')} className={pag === 'visual-novels' ? 'menu-link-active' : ''}>Visual Novels</Link>
    ];

    let keyCount = 0;

    return <div className="header-menu-container">
        <div className="header-menu-container-logo">
            <h2>Pianimu</h2>
            <img src="./images/piano1.png"/>
        </div>
        <div className="header-menu-container-group">
            <div className="header-menu-container-links">
                <ul>
                    {
                        headerLinks.map(link => <li key={++keyCount}> {link} </li>)
                    }
                </ul>
            </div>
        </div>
        <a href="https://play.google.com/store/apps/details?id=tornasuk.anibasho" className="menu-link-anibasho">
            <img src="./images/anibasho-icon.png"/>
        </a>
    </div>
};

export default Header;