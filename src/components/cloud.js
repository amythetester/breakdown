import './cloud.css';
import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

class Cloud extends Component {
    constructor(props) {
        super(props);

        const words = Array.isArray(props.wordCloud) ? props.wordCloud : Object.keys(props.wordCloud);

        this.state = {
            remainingWords: words,
            removedWords: [],
            focusWords: [],
            redirect: false
        };
    };

    componentDidMount(){
        this.enterFullScreen();
    }

    enterFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
    }

    removeWord = (word) => {
        const hiddenWords = this.state.removedWords.slice();
        hiddenWords.push(word);

        const displayWords = this.state.remainingWords.slice();
        const indexOfWord = displayWords.indexOf(word);
        displayWords.splice(indexOfWord, 1);

        this.setState({
            removedWords: hiddenWords,
            remainingWords: displayWords
        });
    }

    focusWord = (word) => {
        const hiddenWords = this.state.focusWords.slice();
        hiddenWords.push(word);

        const displayWords = this.state.remainingWords.slice();
        const indexOfWord = displayWords.indexOf(word);
        displayWords.splice(indexOfWord, 1);

        this.setState({
            focusWords: hiddenWords,
            remainingWords: displayWords
        });
    }

    renderReleaseWords = () => {
        const words = this.state.remainingWords;
        return words.map((word) => {
            return (<div onClick={() => this.removeWord(word)}>{word}</div>)
        });
    }

    renderFocusWords = () => {
        const words = this.state.remainingWords;
        return words.map((word) => {
            return (<div onClick={() => this.focusWord(word)}>{word}</div>)
        });
    }

    renderWords = () => {
        if (this.props.render === 'renderReleaseWords') {
            return this.renderReleaseWords();
        } else {
            return this.renderFocusWords();
        }
    }   

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.wordCallback({
            removed: this.state.removedWords,
            focused: this.state.focusWords,
            remaining: this.state.remainingWords,
        });
        this.setState({ 
            redirect: true 
        });
    }

    redirectCloud = () => {
        const hasWordsRemaining = this.state.remainingWords.length < 1;
        const hasHitMaxRemoved = this.state.removedWords.length > 4;
        const hasHitMaxFocusClicked = this.state.focusWords.length > 4;
        
        return (hasWordsRemaining || hasHitMaxRemoved || hasHitMaxFocusClicked);
    }

    render() {
        if (Object.keys(this.props.wordCloud).length < 1) {
            return <Redirect push to={this.props.fallbackRedirectTo} />;
        }else if (this.state.redirect || this.redirectCloud()) {
            this.props.wordCallback({
                removed: this.state.removedWords,
                focused: this.state.focusWords,
                remaining: this.state.remainingWords,
            });
            return <Redirect push to={this.props.redirectTo} />;
        }else return (
            <div className="center cloudFadeIn">
                <h1 className="question">
                    {this.props.question}
                </h1>
                <section className='app-outer'>
                    <div className='app-inner'>
                    <TagCloud 
                        className='tag-cloud'
                        style={{
                        fontSize: 30,
                        color: () => randomColor({
                            hue: 'blue',
                            luminosity: 'light',
                        }),
                        padding: 5,
                        }}>
                        {this.renderWords()}
                    </TagCloud>
                    </div>
                </section>
                <form onSubmit={event => this.handleSubmit(event)} className="button">
                    <button type="submit" className="btn btn-lg" id="continue-to-ring">Continue</button>
                </form>
            </div>
        );
    }
};

export default Cloud;
