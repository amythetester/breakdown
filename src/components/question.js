import './question.css';
import React, {Component} from 'react';

class Question extends Component {
    render() {
        return (
            <section className="pulse">
                <header>
                    <h1 className="breathe">
                        What's on your mind?
                        {/* <div className="fadingEffect"></div> */}
                    </h1>
                </header>
                <body>
                <form>
                    <textarea type="text" name="current" />
                    <input type="submit" value="Continue" />
                </form>
                </body>
            </section>
        );
    }
};

export default Question;
