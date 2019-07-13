import './question.css'
import React from 'react';
import { Link } from "react-router-dom";

function Welcome() {
    return (
      <div>
        <section className="col-xs-1 text-center">
            <h1>Welcome to Breakdown</h1>
            <p>Click begin to start reducing stress.</p>
            <Link to="/breathe-ring"><button className="btn btn-info" type="submit" id="start-button">Begin</button></Link>
        </section>
        <section className="col-xs-1 text-center">
          <h2>About Breakdown</h2>
          <p>
            Breakdown is an app focused on settling your physical being before diving into your mental state of being. 
            Using breathing exercises and thoughtful questions, Breakdown helps you break your stress down into manageable 
            pieces and helps you visualize a better tomorrow.
          </p>
        </section>
        <section className="col-xs-1 text-center">
          <h2>How does it work?</h2>
          <p>
            Modern living has caused undo stress in folks lives. We don't breathe as deeply. We don't stop to settle ourselves. 
            Breakdown starts the user off with a guided breathing exercise to calm your body and walks through a thought journey
            to help reduce stress. Press Begin to start.
          </p>
        </section>
      </div>
    );
  }

export default Welcome;
