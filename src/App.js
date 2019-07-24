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
      remainingWords: [],
      focusWords:[],
      action: "",
    };
  }

  componentDidMount() {
    console.log('component did mount');
    this.getGeolocation();
  }

  getGeolocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 120000,
      maximumAge: 0
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success, this.error, options);
    }else {
      console.log('geoLocation did not work');
    }
  }

  success = (position) => {
    const current = position.coords;
    const url = `https://fkr0cyut0i.execute-api.us-west-2.amazonaws.com/prod/get-weather?lat=${current.latitude}&lon=${current.longitude}&acc=${current.accuracy}`;
    axios.get(url)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  error = (geoError) => {
    console.log(geoError);
    
    const url = `https://fkr0cyut0i.execute-api.us-west-2.amazonaws.com/prod/get-weather?lat=72&lon=128&acc=2000`;
    axios.get(url)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  initialWordCloud = ({answer, frequency}) => {
    this.setState({
      initialInput: answer,
      initialLetterFrequency: frequency
    });
  }

  removedWordsFromWordCloud = ({removed, remaining}) => {
    console.log(removed);
    console.log(remaining);
    this.setState({
      removedWords: removed,
      remainingWords: remaining,
    });
  }

  focusWordsFromWordCloud = ({focused}) => {
    console.log(focused);
    this.setState({
      focusWords: focused,
    })
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
            render={() =>
              <Ring
                text="Let's start by breathing..."
                circle="yellowCircle"
                redirectTo="/mind-question"
              />
            }
          />
          <Route
            path="/mind-question"
            render={() =>
              <Question
                question="List some things that are on your mind."
                redirectTo="/mind-cloud"
                wordCloudCallback={this.initialWordCloud}
              />
            }
          />
          <Route
            path="/mind-cloud"
            render={() =>
              <Cloud
                question="Select up to 5 words that are causing you stress/anxiety."
                redirectTo="/breathe-out-ring"
                fallbackRedirectTo="/finish"
                wordCloud={this.state.initialLetterFrequency}
                wordCallback={this.removedWordsFromWordCloud}
                render='renderReleaseWords'
              />
            }
          />
          <Route
            path="/breathe-out-ring"
            render={() =>
              <Ring
                text="Time to release those words by breathing them out..."
                circle="fireCircle"
                redirectTo="/focus-cloud"
                words={this.state.removedWords}
                animateWords="fire-animated-words"
              />
            }
          />
          <Route
            path="/focus-cloud"
            render={() =>
              <Cloud
                question="Select up to 5 words that you want to reinforce."
                redirectTo="/breathe-in-ring"
                fallbackRedirectTo="/finish"
                wordCloud={this.state.remainingWords}
                wordCallback={this.focusWordsFromWordCloud}
                render='renderFocusWords'
              />
            }
          />
          <Route
            path="/breathe-in-ring"
            render={() =>
              <Ring
                text="Time to focus on those words by breathing them in..."
                circle="calmCircle"
                redirectTo="/finish"
                words={this.state.focusWords}
                animateWords="calm-animated-words"
              />
            }
          />
          <Route
            path="/next-step"
            render={() =>
              <Action
                redirectTo="/"
                action={this.state.action}
              />
            }
          />
          <Route
            path="/finish"
            render={() =>
              <Finish
                redirectTo="/next-step"
              />
            }
          />
        </Router>
      </div>
    );
  }
}

export default App;
