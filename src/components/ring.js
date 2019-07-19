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
        const progressDuration = (this.getRingDuration() / 1000);
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
                <section className="bar" style={{animation: `${this.getProgressDuration()}s showBar 10s ease`}}> {/*style={{animation: `${this.getProgressDuration()}s showBar 10s ease`}}*/}
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
