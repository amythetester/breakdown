import './question.css'
import React from 'react';
import { Link } from "react-router-dom";

function Welcome() {
    return (
      <section className="col-xs-1 text-center">
            <h1>Welcome to Breakdown</h1>
            <p>Click begin to reduce stress.</p>
            <Link to="/ring"><button className="btn btn-info" type="submit" id="start-button">Begin</button></Link>
      </section>
    );
  }

export default Welcome;
