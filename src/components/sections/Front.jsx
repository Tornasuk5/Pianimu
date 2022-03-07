import React, {useEffect, useState} from 'react';

const Front = props => {
    return <div className="front-slogan-container">
        <div className="front-slogan-container-text">
            <h1>Anime Sheets for Piano</h1>
            <div>
                <h2>OP & ED Anime Songs</h2>
                <img src="./images/saitama.png"/>
            </div>
            <div>
                <h2>Anime OSTs</h2>
                <img src="./images/howl_scarecrow.png"/>
            </div>
            <div>
                <h2>Visual Novel OSTs</h2>
                <img className="clannad-icon" src="./images/dango.png"/>    
            </div>
        </div>
    </div>
};

export default Front;