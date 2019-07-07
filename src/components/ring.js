import './ring.css';
import React, {Component} from  'react';

class Ring extends Component {
    render() {
        return (
            <body>
                <div className="pulsatingCircle">              
                    <span className="circle"></span>                 
                </div>
            </body>
        );
    }
};

export default Ring;
