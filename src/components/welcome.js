import './welcome.css'
import React, {Component} from 'react';
import { Link } from "react-router-dom";

import Nav from './nav.js';
import Footer from './footer.js';

class Welcome extends Component{
  
  componentDidMount(){
    this.exitFullScreen();

    window.scrollTo(0, 0);
  }

  exitFullScreen = () => {
    if (document.fullscreenElement && document.documentElement.requestFullscreen) {
      document.exitFullscreen();
    }
  }

  handleClick = () => {
    localStorage.clear();
  }

  render() {
    return (
      <div className="white">
        <Nav />
        <section className="hero">
          <div className="transparentWelcome">
            <h1>Welcome to Breakdown</h1>
            <h3>Click begin to start reducing stress.</h3>
            <Link to="/breathe-ring"><button className="btn btn-info" onClick={this.handleClick} type="submit" id="begin-button">Begin</button></Link>
          </div>
        </section>
        <section className="wrapper">
          <section className="home">
            <h3>About Breakdown</h3>
            <p>
              Modern living has caused undue stress in folks' lives. We don't breathe as deeply. We don't stop to take stock of 
              our emotional state. Breakdown is an app focused on settling your body and mind. Using breathing exercises and thoughtful 
              prompts, Breakdown helps you break your stress down into manageable pieces and helps you visualize a better tomorrow.
            </p>
          </section>
          <section className="home">
            <h3>My location...why?</h3>
            <p>
              Breakdown strives to provide an intelligent action item at the end of each session. Your location greatly improves 
              our ability to make reasonable recommendations.
            </p>
          </section>
          <section className="home">
            <h3>What about my data?</h3>
            <p>
              We understand that data is personal and so are your thoughts and feelings. Any information provided to Breakdown will 
              not be used for study or sold for any purpose.
            </p>
          </section>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Welcome;
