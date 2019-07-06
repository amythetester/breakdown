import './ring.css';
import React, {Component} from  'react';

class Ring extends Component {
    render() {
        return (
            <section className="pulse">
                <header>
                    <h1 className="breathe">
                        Let's start by breathing.
                    </h1>
                </header>
                <body>
                    <section className="pulsatingCircle">              
                        <span className="circle"></span>                 
                    </section>
                </body>
            </section>
        );
    }
};

export default Ring;
