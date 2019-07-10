import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ring from './components/ring.js'
import Welcome from './components/welcome.js'

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
          render={() => <Ring className="ring"/>}
        />
      </Router>
    </div>
  );
}

export default App;
