import './question.css'
import React from 'react';
import { Link } from "react-router-dom";

function Welcome() {
    return (
      <section className="col-xs-1 text-center">
            <h1>Welcome to Breakdown</h1>
            <p>Click begin to start reducing stress.</p>
            <Link to="/breathe-ring"><button className="btn btn-info" type="submit" id="start-button">Begin</button></Link>
      </section>
    );
  }

export default Welcome;
