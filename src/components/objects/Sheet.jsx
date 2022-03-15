import React from "react";
import { Link, Route } from "wouter";

const Sheet = props => {
    //<Link href={`sheets/${props.path}`}>
    return <a href={props.pdf}>
    <div>
        <div className="sheet-img">
            <img src={props.imgSheet}/>
        </div>
        <div className="sheet-name"><p>{props.name}</p></div>
    </div>
    </a>
};

export default Sheet;