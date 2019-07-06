import './ring.css';
import React, {Component} from  'react';

class Ring extends Component {
    render() {
        return (
            <body>

                <div class="pulsatingCircle">
                
                    <span class="firstCircle"></span>
                    
                    <span class="secondCircle"></span>
                    
                    <span class="thirdCircle"></span>
                    
                </div>
            </body>
        );
    }
};

export default Ring;
