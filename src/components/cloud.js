import './cloud.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

class Cloud extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    };

    renderWords = () => {
        const words = Object.keys(this.props.wordCloud);
        return words.map(function(word) {
            return (<div>{word}</div>)
        });
    }

    render() {
        return (
            <div>
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
                            luminosity: 'bright',
                            hue: 'blue',
                        }),
                        padding: 5,
                        }}>
                        {this.renderWords()}
                    </TagCloud>
                    </div>
                </section>
                <section>
                    <Link to={this.props.linkTo}><button type="submit" className="btn btn-lg" id="continue">Continue</button></Link>
                </section>
            </div>
        );
    }
};

export default Cloud;
