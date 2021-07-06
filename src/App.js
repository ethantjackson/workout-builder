import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MuscleGroupSelectionPage from './pages/MuscleGroupSelectionPage';
import SubMuscleSelectionPage from './pages/SubMuscleSelection';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/muscle-group-selection'>
              <MuscleGroupSelectionPage />
            </Route>
            <Route exact path='/sub-muscle-selection'>
              <SubMuscleSelectionPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
