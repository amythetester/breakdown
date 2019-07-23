import './action.css';
import React, {Component} from  'react';
import { Link } from "react-router-dom";

class Action extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            action: '',
        };
    };

    render() {
        return (
            <div className="action">
                <h1>What's next?</h1>
                <h2>{this.props.action}</h2> 
                <Link to="/finish"><button className="btn btn-info fade-button" type="submit">Continue</button></Link>
            </div>
        );
    }
};

export default Action;
