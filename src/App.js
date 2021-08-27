import React, { useEffect } from 'react';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import HomePage from './pages/homePage/HomePage';
import NewPlanPage from './pages/NewPlanPage';
import EditPlanPage from './pages/EditPlanPage';
import AddStepPage from './pages/AddStepPage';
import UsePlansPage from './pages/usePlansPage/UsePlansPage';
import PlanGuidePage from './pages/planGuidePage/PlanGuidePage';
import MuscleGroupSelectionPage from './pages/MuscleGroupSelectionPage';
import SubMuscleSelectionPage from './pages/SubMuscleSelectionPage';
import EquipmentSelectionPage from './pages/EquipmentSelectionPage';
import GeneratedWorkoutsPage from './pages/generatedWorkoutsPage/GeneratedWorkoutsPage';
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
              <UnPrivateRoute exact path='/' component={LandingPage} />
              <PrivateRoute exact path='/home-page' component={HomePage} />
              <PrivateRoute exact path='/plan' component={NewPlanPage} />
              <PrivateRoute exact path='/edit-plan' component={EditPlanPage} />
              <PrivateRoute exact path='/add-step' component={AddStepPage} />
              <PrivateRoute exact path='/plans' component={UsePlansPage} />
              <PrivateRoute exact path='/guide' component={PlanGuidePage} />
              <Route exact path='/muscle-group-selection'>
                <MuscleGroupSelectionPage />
              </Route>
              <Route exact path='/sub-muscle-selection'>
                <SubMuscleSelectionPage />
              </Route>
              <Route exact path='/equipment-selection'>
                <EquipmentSelectionPage />
              </Route>
              <Route exact path='/workouts'>
                <GeneratedWorkoutsPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
