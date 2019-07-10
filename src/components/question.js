import './question.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Question extends Component {
    render() {
        return (
            <section id="background" className="questionFadeIn">
                <h1 className="question">
                    What's on your mind?
                </h1>
                <form id="input">
                    <div>
                        <textarea type="text" name="current" rows="15" cols="100" />
                    </div>
                    <div className="space"></div>
                    <div>
                         <Link to="/cloud"><button type="submit" className="btn btn-lg" id="continue">Continue</button></Link>
                    </div>
                    <div className="space"></div>
                </form>
            </section>
        );
    }
};

export default Question;
