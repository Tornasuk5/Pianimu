import React from 'react';

const SlideButton = props => {
    return <div className={`slider-slide-button slide-${props.side}-${props.state ? "on" : "off"}`} 
                onClick={props.onClick}>
                <i className={`bi bi-arrow-bar-${props.side}`}></i>
            </div>
};

export default SlideButton;