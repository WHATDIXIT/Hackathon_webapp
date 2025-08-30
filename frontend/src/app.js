import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import WeatherWidget from './components/WeatherWidget';
import ControlPanel from './components/ControlPanel';
import './styles/tailwind.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/weather" component={WeatherWidget} />
        <Route path="/control" component={ControlPanel} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));