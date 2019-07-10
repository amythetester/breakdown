import './ring.css';
import React, {Component} from  'react';

class Ring extends Component {
    render() {
        return (
            <section className="pulse fadingEffect">
                <h1 className="breathe textFadingEffect">
                    Let's start by breathing...
                </h1>
                <section className="pulsatingCircle">              
                    <span className="circle"></span>                 
                </section>
            </section>
        );
    }
};

export default Ring;
