import './finish.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Finish extends Component {

    render(){
        return (
            <div className="finish">
                <h1>Congrats, you made it!</h1>
                <h2>Sometimes life gets overwhelming, but you can do this! You always could.</h2> 
                <h3>Feel free to come back anytime that doesn't feel like the case.</h3>
                <p>Love, Your Breakdown Team</p>
                <Link to="/"><button className="btn btn-info fade-button" type="submit" id="start-button">Finish</button></Link>
            </div>
        );
    }
}

export default Finish;
