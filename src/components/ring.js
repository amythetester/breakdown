import './ring.css';
import React, {Component} from  'react';

class Ring extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fadeOut: "",
          };
    };
    
    render() {
        return (
            <section className="fadingEffect center">
                <h1 className="breathe textFadingEffect">
                    {this.props.question}
                </h1>
                <section className="pulsatingCircle">              
                    <span className={this.props.circle}></span>                 
                </section>
            </section>
        );
    }
};

export default Ring;
