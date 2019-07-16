import './ring.css';
import React, {Component} from  'react';
import { Redirect } from "react-router-dom";

class Ring extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toQuestion: this.props.toQuestion,
            pulseWords: ['fail', 'no time']
        };
    };

    componentDidMount(){
        if (this.state.toQuestion === "breathe-ring") {
            setTimeout(() => this.setState(() => ({toQuestion: "mind"})), 100000)
        }

        if (this.state.toQuestion === "fire-ring") {
            setTimeout(() => this.setState(() => ({toQuestion: "feel"})), 100000)
        }
    }

    rotateWords = () => {

    }
    
    render() {
        if (this.state.toQuestion === "mind") {
            return <Redirect to='/mind-question' />
        }

        if (this.state.toQuestion === "feel") {
            return <Redirect to='/feel-question' />
        }

        return (
            <section className="fadingEffect center">
                <h1 className="text textFadingEffect">
                    {this.props.text}
                </h1>
                <section className="pulsatingCircle">              
                    <span className={this.props.circle}>Word</span>               
                </section>
            </section>
        );
    }
};

export default Ring;
