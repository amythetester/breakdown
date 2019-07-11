import './question.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            unknown: "",
        };
    };
    
    render() {
        return (
            <section id="background" className="questionFadeIn">
                <h1 className="question">
                    {this.props.question}
                </h1>
                <form id="input">
                    <div>
                        <textarea type="text" name="current" rows="15" cols="100" />
                    </div>
                    <div className="space"></div>
                    <div>
                         <Link to={this.props.linkTo}><button type="submit" className="btn btn-lg" id="continue">Continue</button></Link>
                    </div>
                    <div className="space"></div>
                </form>
            </section>
        );
    }
};

export default Question;
