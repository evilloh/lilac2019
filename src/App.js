import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from './components/Home';
import Persona from './components/Persona';
import Celeste from './components/Celeste';
import Night from './components/Night';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/persona" component={Persona} />
                <Route exact path="/celeste" component={Celeste} />
                <Route exact path="/nightinthewoods" component={Night} />
              </Switch>
          </div>
        </Router>
  );
}
}

export default App;
