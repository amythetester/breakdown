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

        if (document.fullscreenElement) {
            return(
                <Link to={() => window.location.reload()} className="full-screen" onClick={this.exitFullScreen}>
                    <img id="exit-fullscreen" src="/images/breakdown-fullscreen.png" alt="Exit Fullscreen" height="50px" tooltiptext="Exit Fullscreen" />
                </Link>
            );
        }else {
            return(
                <Link to={() => window.location.reload()} className="full-screen" onClick={this.enterFullScreen}>
                    <img id="enter-fullscreen" src="/images/breakdown-fullscreen.png" alt="Exit Fullscreen" height="50px" tooltiptext="Enter Fullscreen" />
                </Link>
            );
        }
    }
}

export default InAppNav;