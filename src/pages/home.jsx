import React from "react";
import GridView from '../components/sections/GridView';
import SliderListView from "../components/sections/SliderListView";

const Home = props => {
    return <main className="home-page">
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
                        <div className="front-home-container-img">
                            <img src="./images/main-img.png"/>
                        </div>
                    </div>
                </div>
                <div className="home-sections">
                    <SliderListView section="slider-sheets" view="sheets" title="Last Uploads" filter="id" limit="10"/>
                    <SliderListView section="slider-sheets" view="sheets" title="For Beginners" filter="level" filterValue="low" limit="10"/>
                </div>
            </main>
};

export default Home;