import './ring.css';
import React, {Component} from  'react';
import { Redirect, Link } from "react-router-dom";

class Ring extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };
    };

    getRingDuration = () => {
        const wordArr = this.props.words;
        const arrLength = wordArr.length;
        let ringDuration = 100000;

        const animationDelay = 10;
        const additionBreath = 9;
        const breathDuration = 18;
        if (arrLength > 0){
            ringDuration = (animationDelay + additionBreath + (arrLength * breathDuration)) * 1000;
        }
        return ringDuration;
    }

    getProgressDuration = () => {
        const animationDelay = 10;
        const progressDuration = (this.getRingDuration() / 1000) - animationDelay;
        return progressDuration;
    }

    componentDidMount(){
        setTimeout(() => this.setState(() => ({redirect: true})), this.getRingDuration())
    }

    rotateWords = () => {
        const words = this.props.words;
        return words.map(function(word){
            return(<span>{word}</span>)
        });
    }

    enterFullScreen = () => {
        return document.documentElement.requestFullscreen();
    }
    
    render() {
        if (this.state.redirect === true) {
            return <Redirect push to={this.props.redirectTo} />
        }

        return (
            <section className="fadingEffect center">
                {this.enterFullScreen}
                <h1 className="textFadingEffect">
                    <span>{this.props.text}</span>
                    <span>Exhale as the ring contracts.</span>
                    <span>Inhale as the ring expands.</span>
                </h1>
                <section className="pulsatingCircle">              
                    <span id={this.props.circle} className={this.props.animateWords}>{this.rotateWords()}</span>               
                </section>
                <section className="bar" style={{animation: `${this.getProgressDuration()}s showBar 10s ease`}}> 
                    <span id="progress-bar" className="progress" style={{animation: `${this.getProgressDuration()}s loader 10s ease forwards`}}></span>
                </section>
                <section>
                    <Link to={this.props.redirectTo} className="skip">Skip</Link>
                </section>
            </section>
        );
    }
};

Ring.defaultProps = {
    words: []
};

export default Ring;
