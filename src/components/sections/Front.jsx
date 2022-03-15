import React, {useEffect, useState} from 'react';

const Front = props => {
    return <div className="front-container">
        <div className="front-container-text">
            <h1>{props.pag}</h1>
            <h2>{props.description}</h2>
        </div>
    </div>
};

export default Front;