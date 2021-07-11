import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import MuscleGroupSelectionPage from './pages/MuscleGroupSelectionPage';
import SubMuscleSelectionPage from './pages/SubMuscleSelectionPage';
import EquipmentSelectionPage from './pages/EquipmentSelectionPage';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistedStore from './store';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Provider store={persistedStore.store}>
      <PersistGate loading={null} persistor={persistedStore.persistor}>
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
              <Route exact path='/equipment-selection'>
                <EquipmentSelectionPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
