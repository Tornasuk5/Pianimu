import React from "react";
import { Link, Route } from "wouter";

const Sheet = props => {
    
    return <Link to={props.path}>
        <div className="sheet-background" style={{ backgroundImage: `url(${props.imgSheet})` }}>
            <div className={props.animeLogo !== null ? "sheet-anime-logo" : "sheet-anime-img"}>
                <img src={props.animeLogo !== null ? props.animeLogo : props.animeImg}/>
            </div>
        </div>
        <div className="sheet-name"><p>{props.name}</p></div>
    </Link>
};

export default Sheet;