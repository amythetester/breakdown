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
            <section>
                <h1 className="question">
                    {this.props.question}
                </h1>
                <div>
                <div className='app-outer'>
        <div className='app-inner'>
          <h1>react-tag-cloud demo</h1>
          <TagCloud 
            className='tag-cloud'
            style={{
              fontFamily: 'sans-serif',
              //fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () => randomColor({
                hue: 'blue'
              }),
              padding: 5,
            }}>
            <div
              style={{
                fontFamily: 'serif',
                fontSize: 40,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: randomColor()
              }}>Futurama</div>
            <div>Transformers</div>
            <div>Simpsons</div>
            <div>Dragon Ball</div>
            <div>Rick and Morty</div>
            <div style={{fontFamily: 'courier'}}>He man</div>
            <div style={{fontSize: 30}}>World trigger</div>
            <div style={{fontStyle: 'italic'}}>Avengers</div>
            <div style={{fontWeight: 200}}>Family Guy</div>
            <div style={{color: 'green'}}>American Dad</div>
            <div className="tag-item-wrapper">
              <div>
                Hover Me Please!
              </div>
              <div className="tag-item-tooltip">
                HOVERED!
              </div>
            </div>
            <div>Gobots</div>
            <div>Thundercats</div>
            <div>M.A.S.K.</div>
            <div>GI Joe</div>
            <div>Inspector Gadget</div>
            <div>Bugs Bunny</div>
            <div>Tom and Jerry</div>
            <div>Cowboy Bebop</div>
            <div>Evangelion</div>
            <div>Bleach</div>
            <div>GITS</div>
            <div>Pokemon</div>
            <div>She Ra</div>
            <div>Fullmetal Alchemist</div>
            <div>Gundam</div>
            <div>Uni Taisen</div>
            <div>Pinky and the Brain</div>
            <div>Bobs Burgers</div>
            <div>Dino Riders</div>
            <div>Silverhawks</div>
            <div>Bravestar</div>
            <div>Starcom</div>
            <div>Cops</div>
            <div>Alfred J. Kwak</div>
            <div>Dr Snuggles</div>
          </TagCloud>
        </div>
      </div>
                </div>
                <div>
                    <Link to={this.props.linkTo}><button type="submit" className="btn btn-lg" id="continue">Continue</button></Link>
                </div>
            </section>
        );
    }
};

export default Cloud;
