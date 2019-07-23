import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import Welcome from './components/welcome.js';
import Ring from './components/ring.js';
import Question from './components/question.js';
import Cloud from './components/cloud.js';
import Action from './components/action.js';
import Finish from './components/finish.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialInput: "",
      initialLetterFrequency: {},
      removedWords: [],
      action: "",
    };
  }

  componentDidMount() {
    console.log('component did mount');
    this.getGeolocation();
    // const url = `https://fkr0cyut0i.execute-api.us-west-2.amazonaws.com/prod/get-weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&acc=${pos.coords.accuracy}`
  }

  success = (pos) => {
    alert(`latitude: ${pos.coords.latitude}
    \n longitude: ${pos.coords.longitude}
    \n accuracy: ${pos.coords.accuracy}`);

    const url = `https://fkr0cyut0i.execute-api.us-west-2.amazonaws.com/prod/get-weather?lat=72&lon=128&acc=2000`
    console.log(url);
    axios.get(url)
      .then((response) => {
        // this.setState({action: response.action});
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success);
    }
    console.log('getGeolocation ran')
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
            render={() => <Question question="List some things that are on your mind." linkTo="/mind-cloud" wordCloudCallback={this.initialWordCloud}/>}
          />
          <Route
            path="/mind-cloud"
            render={() => <Cloud question="Select up to 5 words that are causing you stress/anxiety." redirectTo="/breathe-out-ring" wordCloud={this.state.initialLetterFrequency} removeWordCallback={this.removedWordsFromWordCloud}/>}
          />
          <Route
            path="/breathe-out-ring"
            render={() => <Ring text="Time to release those words by breathing them out..." circle="fireCircle" redirectTo="/next-step" words={this.state.removedWords}/>}
          />
          <Route
            path="/next-step"
            render={() => <Action redirectTo="/finish" action={this.state.action}/>}
          />
          <Route
            path="/finish"
            render={() => <Finish redirectTo="/"/>}
          />
        </Router>
      </div>
    );
  }
}

export default App;
