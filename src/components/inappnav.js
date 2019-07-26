import './inappnav.css';
import React from 'react';
import { Link } from "react-router-dom";

function InAppNav(props) {
    if (!document.documentElement.requestFullscreen) {
        return( <nav>
            <Link to={window.history.back()}>Back</Link>
            <Link to=".">Refresh</Link>
            <Link to="!">Fullscreen</Link>
        </nav>);
    }else {
        return (<nav>
            <Link to={window.history.back()}>Back</Link>
            <Link to=".">Refresh</Link>
        </nav>);
    }
}

export default InAppNav;