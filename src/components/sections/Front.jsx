import React, {useEffect, useState} from 'react';

const Front = props => {
    return <div className={`front-${props.pagKey}`}>
        <div className={`front-${props.pagKey}-container`}>
            <h2>{props.page}</h2>
        </div>
    </div>
};

export default Front;