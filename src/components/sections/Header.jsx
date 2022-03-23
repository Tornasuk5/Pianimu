import React from 'react';
import NavigationLink from './items/NavigationLink';

const Header = props => {

    return <div className="header-menu-container">
        <div className="header-menu-container-logo">
            <h2>Pianimu</h2>
            <img src="./images/piano1.png"/>
        </div>
        <div className="header-menu-container-group">
            <nav>
                <NavigationLink href="/">Home</NavigationLink>
                <NavigationLink href="/sheets">Sheets</NavigationLink>
                <NavigationLink href="/animes">Animes</NavigationLink>
                <NavigationLink href="/visual-novels">Visual Novels</NavigationLink>
            </nav>
        </div>
        <a href="https://play.google.com/store/apps/details?id=tornasuk.anibasho" className="menu-link-anibasho">
            <img src="./images/anibasho-icon.png"/>
            <h3>AniBasho</h3>
        </a>
    </div>
};

export default Header;