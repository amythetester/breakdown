import './cloud.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Cloud extends Component {
    render() {
        return (
            <section>
                <h1 className="question">
                    {this.props.question}
                </h1>
                <div>
                    <Link to={this.props.linkTo}><button type="submit" className="btn btn-lg" id="continue">Continue</button></Link>
                </div>
            </section>
        );
    }
};

export default Cloud;
