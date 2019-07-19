import './welcome.css'
import React from 'react';
import { Link } from "react-router-dom";

function Welcome() {
    return (
      <div className="white">
        <section className="home">
            <h1>Welcome to Breakdown</h1>
            <h3>Click begin to start reducing stress.</h3>
            <Link to="/breathe-ring"><button className="btn btn-info" type="submit" id="begin-button">Begin</button></Link>
        </section>
        <section className="home">
          <h3>About Breakdown</h3>
          <p>
            Breakdown is an app focused on settling your physical being before diving into your mental state of being. 
            Using breathing exercises and thoughtful questions, Breakdown helps you break your stress down into manageable 
            pieces and helps you visualize a better tomorrow.
          </p>
        </section>
        <section className="home">
          <h3>How does it work?</h3>
          <p>
            Modern living has caused undue stress in folks' lives. We don't breathe as deeply. We don't stop to settle ourselves. 
            Breakdown starts the user off with a guided breathing exercise to calm your body and walks through a thought journey
            to help reduce stress. Press Begin to start.
          </p>
        </section>
        <section className="home">
          <h3>What about my data?</h3>
          <p>
            We understand that data is personal and so are your thoughts and feelings. As a result, any input you provide Breakdown is not 
            stored in a database. Addionally this information will not be used for study or sold for any purpose.
          </p>
        </section>
      </div>
    );
  }

export default Welcome;
