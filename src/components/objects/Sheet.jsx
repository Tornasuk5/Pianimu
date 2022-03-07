import React from "react";
import { Link, Route } from "wouter";

const Sheet = props => {
    return <Link href={`sheets/${props.path}`}>
    <div>
        <div className="sheet-img">
            <img src={props.imgSheet}/>
        </div>
        <div className="sheet-name"><p>{props.name}</p></div>
    </div>
    </Link>
};

export default Sheet;