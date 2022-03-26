import React from "react";
import { Link, useLocation } from "wouter";

const Sheet = props => {
    const [location, setLocation] = useLocation();
    
    return <Link to={location.split("/")[1] === "" ? `/sheets/${props.path}` : `${location}/${props.path}`}>
        <div className="sheet-background" style={{ backgroundImage: `url(${props.sheetImg})` }}>
            <div className={props.animeLogo !== undefined ? "sheet-anime-logo" : "sheet-anime-img"}>
                <img src={props.animeLogo !== undefined ? props.animeLogo : props.animeImg}/>
            </div>
        </div>
        <div className="sheet-name"><p>{props.name}</p></div>
    </Link>
};

export default Sheet;