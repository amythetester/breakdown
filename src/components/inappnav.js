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
                    <img id="fullscreen" src="/images/breakdown-fullscreen.png" alt="fullscreen" height="50px" align="right" />
                </Link>
            );
        }else {
            return(
                <Link to={() => window.location.reload()} className="full-screen" onClick={this.enterFullScreen}>
                    <img id="fullscreen" src="/images/breakdown-fullscreen.png" alt="fullscreen" height="50px" align="right" />
                </Link>
            );
        }
    }
}

export default InAppNav;