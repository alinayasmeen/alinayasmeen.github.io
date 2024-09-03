import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DiaryEntry from './pages/DiaryEntry';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/diary-entry" component={DiaryEntry} />
      </Switch>
    </Router>
  );
};

export default App;
