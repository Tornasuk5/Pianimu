import React from 'react';

const Front = props => {
    return <div className={`front-${props.pagKey}`}>
        <div className={`front-${props.pagKey}-container`}>
            <h2>{props.title}</h2>
        </div>
    </div>
};

export default Front;