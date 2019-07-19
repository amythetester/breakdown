import './ring.css';
import React, {Component} from  'react';
import { Redirect } from "react-router-dom";

class Ring extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };
    };

    componentDidMount(){
        setTimeout(() => this.setState(() => ({redirect: true})), 100000)
    }

    rotateWords = () => {
        const words = this.props.words;
        return words.map(function(word){
            return(<span>{word}</span>)
        });
    }
    
    render() {
        if (this.state.redirect === true) {
            return <Redirect to={this.props.redirectTo} />
        }

        return (
            <section className="fadingEffect center">
                <h1 className="textFadingEffect">
                    <span>{this.props.text}</span>
                    <span>Exhale as the ring contracts.</span>
                    <span>Inhale as the ring expands.</span>
                </h1>
                <section className="pulsatingCircle">              
                    <span id={this.props.circle} className="animated-words">{this.rotateWords()}</span>               
                </section>
                <section className="bar">
                    <span id="progress-bar" className="progress"></span>
                </section>
            </section>
        );
    }
};

Ring.defaultProps = {
    words: []
};

export default Ring;
