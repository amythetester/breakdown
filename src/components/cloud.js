import './cloud.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Cloud extends Component {
    render() {
        return (
            <section>
                <h1 className="question">
                    Are there any words you wish to remove?
                </h1>
                <div>
                    <Link to="/breath-out"><button type="submit" className="btn btn-lg" id="continue">Continue</button></Link>
                </div>
            </section>
        );
    }
};

export default Cloud;
