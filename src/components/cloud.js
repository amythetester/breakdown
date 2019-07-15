import './cloud.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

class Cloud extends Component {
    constructor(props) {
        super(props);

        this.state = {
            letterFrequency: {the:2, try:1, again:3} //this.props.wordCloud,
        };
    };

    renderWordCloud = () => {

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
                            hue: 'blue'
                        }),
                        padding: 5,
                        }}>
                        <div>I</div>
                        <div>try</div>
                        <div>hard</div>
                        <div>but</div>
                        <div>sometimes</div>
                        <div>I</div>
                        <div>still</div>
                        <div>fail</div>
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
