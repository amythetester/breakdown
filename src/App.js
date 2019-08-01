import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
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

    const initialLetterFrequency = JSON.parse(localStorage.getItem('initialLetterFrequency'));
    const removedWords = JSON.parse(localStorage.getItem('removedWords'));
    const remainingWords = JSON.parse(localStorage.getItem('remainingWords'));
    const focusWords = JSON.parse(localStorage.getItem('focusWords'));

    this.state = {
      initialInput: "",
      initialLetterFrequency: initialLetterFrequency || {},
      removedWords: removedWords || [],
      remainingWords: remainingWords || [],
      focusWords: focusWords || [],
      actions: [],
    };
  }

  componentDidMount() {
    this.getGeolocation();
    console.log('app component mounted');
  }

  getGeolocation = () => {
    const options = {
      enableHighAccuracy: false,
      timeout: 120000,
      maximumAge: 0
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success, this.error, options);
      console.log('geolocation ran')
    }else {
      console.log('geoLocation did not work');
    }
  }

  success = (position) => {
    console.log('success geolocation')
    const current = position.coords;
    const url = `https://fkr0cyut0i.execute-api.us-west-2.amazonaws.com/prod/get-weather?lat=${current.latitude}&lon=${current.longitude}&acc=${current.accuracy}`;
    axios.get(url)
      .then((response) => {
        console.log(response);
        const parsedResponse = JSON.parse(response.data.body);
        if (Array.isArray(parsedResponse)){
          this.setState({actions: parsedResponse});
        }
        console.log(this.state.actions);
      })
      .catch(function (error) {
        console.log(error);
        this.setState({
          actions: [ 
            "Drink some water or have a snack. Remember we are like complex plants with emotions.", 
            "Take a moment to do some quick stretches. Lower your shoulders from your ears. Relax your jaw. Stand if you are able. Roll your neck a couple of times each direction.",
            "Go for a walk, jog, or just enjoy time outside. Sometimes we just need a change of scenary to help clear our thoughts. Take in that fresh air, you deserve it.",
          ]
        });
      })
  }

  error = (geoError) => {
    console.log(geoError);
    this.setState({
      actions: [ 
        "Drink some water or have a snack. Remember we are like complex plants with emotions.", 
        "Take a moment to do some quick stretches. Lower your shoulders from your ears. Relax your jaw. Stand if you are able. Roll your neck a couple of times each direction.",
        "Go for a walk, jog, or just enjoy time outside. Sometimes we just need a change of scenary to help clear our thoughts. Take in that fresh air, you deserve it.",
      ]
    });
  }

  initialWordCloud = ({answer, frequency}) => {
    localStorage.setItem('initialLetterFrequency', JSON.stringify(frequency));

    this.setState({
      initialInput: answer,
      initialLetterFrequency: frequency
    });
  }

  removedWordsFromWordCloud = ({removed, remaining}) => {
    localStorage.setItem('removedWords', JSON.stringify(removed));
    localStorage.setItem('remainingWords', JSON.stringify(remaining));

    this.setState({
      removedWords: removed,
      remainingWords: remaining,
    });
  }

  focusWordsFromWordCloud = ({focused}) => {
    localStorage.setItem('focusWords', JSON.stringify(focused));
    
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
            render={() => <Welcome />}
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
                question="List what's on your mind, positive or negative. Both are encouraged."
                redirectTo="/mind-cloud"
                wordCloudCallback={this.initialWordCloud}
              />
            }
          />
          <Route
            path="/mind-cloud"
            render={() =>
              <Cloud
                question="Select up to 5 words that are causing you stress."
                redirectTo="/breathe-out-ring"
                fallbackRedirectTo="/focus-cloud"
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
            path="/finish"
            render={() =>
              <Finish
                redirectTo="/next-step"
              />
            }
          />
          <Route
            path="/next-step"
            render={() =>
              <Action
                redirectTo="/"
                action={this.state.actions}
              />
            }
          />
        </Router>
      </div>
    );
  }
}

export default App;
