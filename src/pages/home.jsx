import React from "react";
import SheetsList from '../components/sections/SheetsList';

const Home = props => {
    return <div className="home-page">
            
            <main className="main-container">
                <div className="front-home">
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
                    </div>
                </div>
                <div className="main-container-sections">
                    <section className="sheets-last-uploads">
                        <SheetsList filter="Last Uploads"/>
                    </section>
                    <section className="sheets-for-beginners">
                        <SheetsList filter="For Beginners"/>
                    </section>
                </div>
            </main>
        </div>
};

export default Home;