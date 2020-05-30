import React from 'react';
import './App.css';
import Index from './views/index/index';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
function App() {
  return (
      <div>
      <Router>
          <Route exact path="/" component={Index} />
          <Route path="/index" component={Index} />
      </Router>
    </div>
  );
}

export default App;
