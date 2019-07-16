import './question.css';
import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: "",
            redirect: false,
        };
    };

    frequency = () => {
        const finalFrequency = {};
        const strAnswer = this.state.answer;
        const arrAnswer = strAnswer.split(' ');
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
            <section id="background" className="questionFadeIn">
                <h1 className="question">
                    {this.props.question}
                </h1>
                <form id="input" onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <textarea type="text" name="answer" rows="15" cols="100" onChange={this.onChangeHandler} />
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
