import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ring from './components/ring.js'
import Welcome from './components/welcome.js'
import Question from './components/question.js'
import Cloud from './components/cloud.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialInput: "",
      initialLetterFrequency: {},
      removedWords: [],
    };
  }

  initialWordCloud = ({answer, frequency}) => {
    this.setState({
      initialInput: answer,
      initialLetterFrequency: frequency
    });
  }

  removedWordsFromWordCloud = ({words}) => {
    this.setState({
      removedWords: words,
    });
  }

  render() {
    return (
      <div>
        <Router>
          {console.log("I'm a console log")}
          <Route
            exact path="/"
            render={() => <div><nav className="nav navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Breakdown</Link>
            <Link to="/breathe-ring"><button className="btn btn-dark nav-item nav-link" type="submit">Begin</button></Link>
          </nav> <Welcome /></div>}
          />
          <Route
            path="/breathe-ring"
            render={() => <Ring text="Let's start by breathing..." circle="yellowCircle" redirectTo="/mind-question" />}
          />
          <Route
            path="/mind-question"
            render={() => <Question question="What's on your mind?" linkTo="/mind-cloud" wordCloudCallback={this.initialWordCloud}/>}
          />
          <Route
            path="/mind-cloud"
            render={() => <Cloud question="Are there any words you wish to remove?" redirectTo="/breathe-out-ring" wordCloud={this.state.initialLetterFrequency} removeWordCallback={this.removedWordsFromWordCloud}/>}
          />
          <Route
            path="/breathe-out-ring"
            render={() => <Ring text="Time to breathe those words out..." circle="fireCircle" redirectTo="/" words={this.state.removedWords}/>}
          />
        </Router>
      </div>
    );
  }
}

export default App;
