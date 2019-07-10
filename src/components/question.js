import './question.css';
import React, {Component} from 'react';

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
                        <input type="submit" value="Continue" className="btn btn-lg" id="continue" />
                    </div>
                    <div className="space"></div>
                </form>
            </section>
        );
    }
};

export default Question;
