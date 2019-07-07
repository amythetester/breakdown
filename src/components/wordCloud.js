import React, {Component} from  'react';
import './wordCloud.css'

class WordCloud extends Component {
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

export default WordCloud;
