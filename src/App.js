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
    };
  }

  initalWordCloud = (props) => {
    console.log(`***I'm the Props!!!**** ${props}`)
    this.setState({
      initialInput: props.answer,
      initialLetterFrequency: props.frequency
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
            render={() => <Ring text="Let's start by breathing..." circle="yellowCircle" toQuestion="breathe-ring"/>}
          />
          <Route
            path="/mind-question"
            render={() => <Question question="What's on your mind?" linkTo="/mind-cloud" wordCloudCallback={this.initialWordCloud}/>}
          />
          <Route
            path="/mind-cloud"
            render={() => <Cloud question="Are there any words you wish to remove?" linkTo="/breathe-out-ring" wordCloud={this.state.initialLetterFrequency}/>}
          />
          <Route
            path="/breathe-out-ring"
            render={() => <Ring text="Time to breathe those words out..." circle="fireCircle" toQuestion="fire-ring"/>}
          />
          <Route
            path="/feel-question"
            render={() => <Question question="How would you like to feel?" linkTo="/feel-cloud"/>}
          />
          <Route
            path="/feel-cloud"
            render={() => <Cloud question="" linkTo="/growth-question"/>}
          />
          <Route
            path="/growth-question"
            render={() => <Question question="What would you like to see change in the future?" linkTo="/growth-cloud"/>}
          />
          <Route
            path="/growth-cloud"
            render={() => <Cloud question="" linkTo=""/>}
          />
        </Router>
      </div>
    );
  }
}

export default App;
