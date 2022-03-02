import React, {useEffect, useState} from 'react';

const Header = (pag) => {

    const [linkFocus, setLinkFocus] = useState('Home');

    return <div className="header-menu-container">
        <div className="header-menu-container-logo">
            <img src="./images/logo-sakura.png"/>
        </div>
        <div className="header-menu-container-links">
            <ul>
                <li>
                    <a href="#" className="menu-link">
                        <img src=""/>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="menu-link">
                        <img src=""/>
                        Sheets
                    </a>
                </li>
                <li>
                    <a href="#" className="menu-link">
                        <img src=""/>
                        Animes
                    </a>
                </li>
                <li>
                    <a href="https://play.google.com/store/apps/details?id=tornasuk.anibasho" className="menu-link anibasho-logo">
                        <img src="./images/anibasho-icon.png"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
};

export default Header;