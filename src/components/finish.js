import './finish.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Finish extends Component {

    render(){
        return (
            <section className="finish">
                <div className="transparentFinish">
                    <h1>Congrats, you made it!</h1>
                    <h2>Sometimes life gets overwhelming, but you can do this! You always could.</h2> 
                    <h2>Feel free to come back anytime that doesn't feel like the case.</h2>
                    <h3>Love, Your Breakdown Team</h3>
                    <Link to={this.props.redirectTo}><button className="btn btn-info fade-button" type="submit" id="begin-button">Finish</button></Link>
                </div>
            </section>
        );
    }
}

export default Finish;
