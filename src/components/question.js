import './question.css';
import React, {Component} from 'react';

class Question extends Component {
    render() {
        return (
            <section>
                <header>
                    <h1 className="question">
                        What's on your mind?
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
