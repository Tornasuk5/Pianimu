import React from 'react';
import { Link, useRoute} from "wouter";

const NavigationLink = props => {

    const [linkActive] = useRoute(props.href);

    return (<Link {...props}>
                <a className={linkActive ? "menu-link-active" : ""}>{props.children}</a>
            </Link>
    );
}

export default NavigationLink;