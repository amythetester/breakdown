import './inappnav.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class InAppNav extends Component {
    enterFullScreen = () => {
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
    }

    exitFullScreen = () => {
        if (document.fullscreenElement && document.documentElement.requestFullscreen) {
            document.exitFullscreen();
        }
    }

    render(){
        document.onfullscreenchange = () => this.forceUpdate();
        return( <nav>
            {/* {window.history.length > 1 ? <Link to={() => window.history.back()}>Back</Link> : <Link to="/">Home</Link>}
            <Link to={() => window.location.reload()}>Refresh</Link> */}
            {document.fullscreenElement ? <Link to={() => window.location.reload()} className="full-screen" onClick={this.exitFullScreen}>Exit Fullscreen</Link> : <Link to={() => window.location.reload()} className="full-screen" onClick={this.enterFullScreen}>Fullscreen</Link>}
        </nav>);
    }
}

export default InAppNav;