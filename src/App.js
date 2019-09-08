import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/staff" component={Staff} />
        </div>
      </div>
    </Router>
  );
}

export default App;
