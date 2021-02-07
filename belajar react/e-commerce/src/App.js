import React from 'react';
// import {Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'https://code.jquery.com/jquery-3.5.1.slim.min.js'
import './App.css';


function App(){
  
    return(
      <div>
        <div className="jumbo-tron">
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="navbar-brand">Pasarku</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item nav-link text-white">Bantuan <div className="bot-border-active mx-auto"></div></li>
              <li className="nav-item nav-link text-white">Bahasa<div className="bot-border mx-auto"></div></li>
              <li className="nav-item nav-link text-white">Masuk<div className="bot-border mx-auto"></div></li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default App;
