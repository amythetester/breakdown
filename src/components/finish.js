import './finish.css';
import React from 'react';
import { Link } from "react-router-dom";

function Finish() {
    return (
        <div className="finish">
            <h1>Congrats, you made it!</h1>
            <h3>
                Sometimes life gets overwhelming, but you can do this! You always could. 
                Feel free to come back anytime that doesn't feel like the case.
            </h3>
            <p>Love, your Breakdown Team</p>
            <Link to="/"><button className="btn btn-info" type="submit" id="start-button">Finish</button></Link>
        </div>
    );
  }

export default Finish;
