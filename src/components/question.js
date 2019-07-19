import './question.css';
import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

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
        const noCharAnswer = strAnswer.replace(/[|&;$%@"<>()+,.!]/gi, ' ');
        const cleanAnswer = this.removeWords(noCharAnswer);
        const arrAnswer = cleanAnswer.split(' ');
        console.log(arrAnswer);
        arrAnswer.forEach(function(word) {
            if (finalFrequency[word] == null) {
                finalFrequency[word] = 1;
            } else {
                finalFrequency[word] += 1;
            }
        });
        console.log(finalFrequency);
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

        console.log(finalFrequency);
        this.setState({
            redirect: true
        });
    }
    
    render() {
        if (this.state.redirect) return <Redirect to={this.props.linkTo} />;
        else return (
            <section className="questionFadeIn">
                <h1 className="question">
                    {this.props.question}
                </h1>
                <form id="input" onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <textarea type="text" name="answer" autofocus="true" rows="7" cols="50" onChange={this.onChangeHandler} />
                    </div>
                    <div className="space"></div>
                    <div>
                       <button type="submit" className="btn btn-lg" id="continue">Continue</button>
                    </div>
                    <div className="space"></div>
                </form>
            </section>
        );
    }
};

export default Question;
