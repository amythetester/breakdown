import './cloud.css';
import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

class Cloud extends Component {
    constructor(props) {
        super(props);

        this.state = {
            remainingWords: [],
            removedWords: [],
            redirect: false
        };
    };

    componentDidMount() {
        const words = Object.keys(this.props.wordCloud);
        this.setState({ remainingWords: words})
    }

    removeWord = (word) => {
        const hiddenWords = this.state.removedWords;
        hiddenWords.push(word);

        const displayWords = this.state.remainingWords;
        const indexOfWord = displayWords.indexOf(word);
        displayWords.splice(indexOfWord, 1);

        this.setState({
            removedWords: hiddenWords,
            remainingWords: displayWords
        });
    }

    renderWords = () => {
        const words = this.state.remainingWords;
        return words.map((word) => {
            return (<div onClick={() => this.removeWord(word)}>{word}</div>)
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.removeWordCallback({
            words: this.state.removedWords
        });
        this.setState({ 
            redirect: true 
        });
    }

    render() {
        if (this.state.redirect) return <Redirect to={this.props.redirectTo} />;
        else return (
            <div className="center">
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
