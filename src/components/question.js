import './question.css';
import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

import InAppNav from './inappnav.js';

class Question extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;

        this.state = {
            answer: "",
            redirect: false,
        };
    };

    // Borrowed from here https://stackoverflow.com/questions/49655135/javascript-regex-remove-multiple-words-from-string
    removeWords = function(text) {
        const wordArray = [
          "a", "am", "an", "and", "at", "be", "by", "but", "for", "from", "in", "is", "it", 
          "no", "of", "on", "or", "so", "that", "the", "this", "to", 
        ];

        const expStr = wordArray.join("|");
	    return text.replace(new RegExp('\\b(' + expStr + ')\\b', 'gi'), ' ')
                    .replace(/\s{2,}/g, ' ');
    }

    frequency = () => {
        const finalFrequency = {};
        const strAnswer = this.state.answer.toLowerCase();
        const noCharAnswer = strAnswer.replace(/[|&;$%@"<>()+,.!\r\n]/gi, ' ');
        const cleanAnswer = this.removeWords(noCharAnswer);
        const arrAnswer = cleanAnswer.split(' ');
        arrAnswer.forEach(function(word) {
            if (!word) return;
            if (finalFrequency[word] == null) {
                finalFrequency[word] = 1;
            } else {
                finalFrequency[word] += 1;
            }
        });
        return finalFrequency;
    }

    onChangeHandler = (event) => {
        const field = {}
        field[event.target.name] = event.target.value;
    
        this.setState(field);
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const finalFrequency = this.frequency();
        
        this.props.wordCloudCallback({
            frequency: finalFrequency,
            answer: this.state.answer,
        });

        this.setState({
            redirect: true
        });
    }
    
    render() {
        if (this.state.redirect) return <Redirect push to={this.props.redirectTo} />;
        else return (
            <section id="mind-question" className="questionFadeIn">
                {/* <div id="inAppNav">
                    <InAppNav />
                </div> */}
                <h1 id="question">
                    {this.props.question}
                </h1>
                <form id="input" onSubmit={event => this.handleSubmit(event)}>
                    <div id="textbox">
                        <textarea type="text" name="answer" maxlength="400" minlength="1" required={true} autoFocus={true} onChange={this.onChangeHandler} />
                    </div>
                    <div id="submit">
                       <button type="submit" id="continue" className="btn btn-lg">Continue</button>
                    </div>
                </form>
            </section>
        );
    }
};

export default Question;
