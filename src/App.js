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
          <Link to="/ring"><button className="btn btn-dark nav-item nav-link" type="submit">Begin</button></Link>
        </nav> <Welcome /></div>}
        />
        <Route
          path="/ring"
          render={() => <Ring question="Let's start by breathing..." circle="yellowCircle"/>}
        />
        <Route
          path="/question"
          render={() => <Question />}
        />
        <Route
          path="/cloud"
          render={() => <Cloud />}
        />
        <Route
          path="/breath-out"
          render={() => <Ring question="Time to breathe those words out..." circle="fireCircle"/>}
        />
      </Router>
    </div>
  );
}

export default App;
