import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuscleGroupSelectionPage from './pages/MuscleGroupSelectionPage';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <MuscleGroupSelectionPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
