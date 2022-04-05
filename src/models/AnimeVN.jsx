import React from "react";
import { Link, useLocation } from "wouter";

const AnimeVN = props => {
    const [location, setLocation] = useLocation();

    return <Link to={`${location}/${props.path}`}>
        <div className="anime-vn-img">
            <img src={props.img}/>
        </div>
        <div className="anime-vn-name"><p>{props.name}</p></div>
    </Link>
};

export default AnimeVN;