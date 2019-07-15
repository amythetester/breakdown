import './question.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            letterFrequency: {},
        };
    };

    onChangeHandler = (event) => {
        const field = {}
        field[event.target.name] = event.target.value;
    
        this.setState(field);
      }
    
    handleSubmit = (event) => {
    event.preventDefault();
    this.props.wordCloudCallback({
        letterFrequency: this.state.letterFrequency
    });
    this.setState({
        letterFrequency: ''
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
                        <textarea type="text" name="current" rows="15" cols="100" onChange={this.onChangeHandler} />
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
