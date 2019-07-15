import './question.css';
import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: "",
            letterFrequency: {},
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
        this.setState({letterFrequency: finalFrequency});

        // this.props.wordCloudCallback({
        //     frequency: this.state.letterFrequency,
        //     answer: this.state.answer,
        // });
    }

    onChangeHandler = (event) => {
        const field = {}
        field[event.target.name] = event.target.value;
    
        this.setState(field);
      }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.frequency();
        
        console.log(this.state.letterFrequency);
        this.setState({
            letterFrequency: {},
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
