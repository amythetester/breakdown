import './cloud.css';
import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

// import InAppNav from './inappnav.js';

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
        window.scrollTo(0, 0);
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
            return <Redirect push to="/finish" />;
        }else if (this.state.removedWords.length === 0 && this.state.focusWords.length === 0 && this.state.redirect) {
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
                {/* <div id="inAppNav">
                    <InAppNav />
                </div> */}
                <h1 className="text">
                    {this.props.question}
                </h1>
                <section className='app-outer'>
                    <div className='app-inner'>
                    <TagCloud 
                        className='tag-cloud'
                        style={{
                        fontSize: 30,
                        color: () => randomColor({
                            hue: 'yellow',
                            luminosity: 'light',
                        }),
                        padding: 5,
                        }}>
                        {this.renderWords()}
                    </TagCloud>
                    </div>
                </section>
                <form onSubmit={event => this.handleSubmit(event)} className="button">
                    <div className="wrap-button">
                        <button type="submit" className="btn btn-info fade-button" id="begin-button">Continue</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Cloud;
