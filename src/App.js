import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ring from './components/ring.js'
import Welcome from './components/welcome.js'
import Question from './components/question.js'
import Cloud from './components/cloud.js'

function App() {
  return (
    <div>
      <Router>
        <Route
          exact path="/"
          render={() => <div><nav className="nav navbar navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">Breakdown</Link>
          <Link to="/breathe"><button className="btn btn-dark nav-item nav-link" type="submit">Begin</button></Link>
        </nav> <Welcome /></div>}
        />
        <Route
          path="/breathe-ring"
          render={() => <Ring text="Let's start by breathing..." circle="yellowCircle"/>}
        />
        <Route
          path="/mind-question"
          render={() => <Question question="What's on your mind?" linkTo="/mind-cloud"/>}
        />
        <Route
          path="/mind-cloud"
          render={() => <Cloud question="Are there any words you wish to remove?" linkTo="/breathe-out-ring"/>}
        />
        <Route
          path="/breathe-out-ring"
          render={() => <Ring text="Time to breathe those words out..." circle="fireCircle"/>}
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
          render={() => <Question question="Who would you like to be?" linkTo="/growth-cloud"/>}
        />
        <Route
          path="/growth-cloud"
          render={() => <Cloud question="" linkTo=""/>}
        />
      </Router>
    </div>
  );
}

export default App;
