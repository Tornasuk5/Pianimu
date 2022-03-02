import React from "react";

const Sheet = props => {
    return <div className="sheet">
        <div className="sheet-img">
            <img src={props.imgSheet}/>
        </div>
        <div className="sheet-name"><p>{props.name}</p></div>
    </div>
};

export default Sheet;