import React, { useEffect } from "react";
import FrontHome from "./FrontHome";
import SliderListView from "components/SliderListView";

const Home = props => {

    useEffect(() => {
        document.title = "Pianimu";
    }, [])

    return <main className="home-page">
                <FrontHome/>
                <div className="home-sections">
                    <SliderListView section="slider-sheets" view="sheets" title="Last Uploads" filter="id" limit="10"/>
                    <SliderListView section="slider-sheets" view="sheets" title="For Beginners" filter="level" filterValue="low" limit="10"/>
                </div>
            </main>
};

export default Home;