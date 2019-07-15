import './question.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: "",
            letterFrequency: {},
        };
    };

    frequency = () => {
        const strAnswer = this.state.answer;
        const arrAnswer = strAnswer.split(' ');
        console.log(arrAnswer);
        const finalFrequency = {};
        arrAnswer.forEach(function(word){
            if (finalFrequency.word === false) {
                finalFrequency.word = 1;
            } else {
                finalFrequency.word += 1;
            }
        });
        console.log(finalFrequency);
        this.setState({letterFrequency: finalFrequency});
    }

    onChangeHandler = (event) => {
        const field = {}
        field[event.target.name] = event.target.value;
    
        this.setState(field);
      }
    
    handleSubmit = (event) => {
    event.preventDefault();
    this.frequency();
    this.props.wordCloudCallback({
        frequency: this.state.letterFrequency,
        answer: this.state.answer,
    });
    console.log(this.state.letterFrequency);
    this.setState({
        letterFrequency: {}
    });
    }
    
    render() {
        return (
            <section id="background" className="questionFadeIn">
                <h1 className="question">
                    {this.props.question}
                </h1>
                <form id="input" onSubmit={this.handleSubmit}>
                    <div>
                        <textarea type="text" name="answer" rows="15" cols="100" onChange={this.onChangeHandler} />
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
