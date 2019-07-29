import React from  'react';
import { Link } from "react-router-dom";

function Nav(){
    return (
    <nav className="nav navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Breakdown</Link>
        <Link to="/breathe-ring"><button className="btn btn-info nav-item nav-link" type="submit">Start a New Session</button></Link>
    </nav>)
};

export default Nav;