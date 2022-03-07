import React from "react";
import SheetsList from '../components/sections/SheetsList';
import Header from '../components/sections/Header';
import Front from '../components/sections/Front';

const Home = props => {
    return <div className="home-page">
            <header className="header-menu">
                <Header pag="Home"/>
            </header>

            <main className="main-container">
                <div className="front-slogan">
                    <Front pag=""/>
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