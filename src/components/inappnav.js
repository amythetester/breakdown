import './inappnav.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import fullscreen from './images/breakdown-fullscreen.png';

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
                <Link to={location => `${location.pathname}`} className="full-screen" onClick={this.exitFullScreen}>
                    <img id="exit-fullscreen" src={fullscreen} alt="Exit Fullscreen" height="50px" tooltiptext="Exit Fullscreen" />
                </Link>
            );
        }else {
            return(
                <Link to={location => `${location.pathname}`} className="full-screen" onClick={this.enterFullScreen}>
                    <img id="enter-fullscreen" src={fullscreen} alt="Exit Fullscreen" height="50px" tooltiptext="Enter Fullscreen" />
                </Link>
            );
        }
    }
}

export default InAppNav;
