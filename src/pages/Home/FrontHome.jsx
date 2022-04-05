import React from "react";

const FrontHome = props => {
    return <div className="front-home">
                <div className="front-home-container">
                    <div className="front-home-container-text">
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
                    <div className="front-home-container-img">
                        <img src="./images/main-img.png"/>
                    </div>
                </div>
            </div>
};

export default FrontHome;