import './action.css';
import React, {Component} from  'react';
// import { Link } from "react-router-dom";

import Nav from './nav.js';
import Footer from './footer.js';

class Action extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            actions: [],
        };
    };

    componentDidMount(){
        this.exitFullScreen();
    }

    exitFullScreen = () => {
        if (document.fullscreenElement && document.documentElement.requestFullscreen) {
            document.exitFullscreen();
        }
    }

    render() {
        return (
            <div className="white">
                <Nav />
                <section className="banner">
                    <div className="transparentAction">
                        <h1>What's Next?</h1>
                        <p>Consider taking one of the following actions.</p>
                    </div>
                </section>
                <section className="actions">
                    <section className="action">
                        <h3>Have 5 minutes?</h3>
                        <p>{this.props.actions[0]}</p>
                    </section>
                    <section className="action">
                        <h3>Have 10 minutes?</h3>
                        <p>{this.props.actions[1]}</p>
                    </section>
                    <section className="action">
                        <h3>Have more time?</h3>
                        <p>{this.props.actions[2]}</p>
                    </section>
                </section>
                <Footer />
                {/* <div id="home">
                    <Link to={this.props.redirectTo}><button className="btn btn-info" type="submit" id="begin-button">Back to Home</button></Link>
                </div> */}
            </div>
        );
    }
};

Action.defaultProps = {
    actions: [ 
        "Drink some water or have a snack. Remember we are like complex plants with emotions.", 
        "Take a moment to do some quick stretches. Lower your shoulders from your ears. Relax your jaw. Stand if you are able. Roll your neck a couple of times each direction.",
        "Go for a walk, jog, or just enjoy time outside. Sometimes we just need a change of scenary to help clear our thoughts. Take in that fresh air and enjoy your time away.",
    ]
};

export default Action;
