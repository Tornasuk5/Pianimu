import React from "react";
import { Link, Route } from "wouter";
import Animes from "../../pages/Animes";
import GridView from "../sections/GridView";

const AnimeVN = props => {
    return <Link href={props.path}>
        <div className="anime-vn-img">
            <img src={props.img}/>
        </div>
        <div className="anime-vn-name"><p>{props.name}</p></div>
    </Link>
};

export default AnimeVN;