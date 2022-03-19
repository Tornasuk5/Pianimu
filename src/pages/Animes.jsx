import React from "react";
import Front from "../components/sections/Front"

const Animes = props => {
    return <div className="animes-page">
            <main className="main-container">
                <Front pagKey = "animes" page="Animes"/>
            </main>
        </div>
};

export default Animes;