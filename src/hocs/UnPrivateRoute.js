import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/UserActions';

const UnPrivateRoute = ({
  component: Component,
  isAuthenticated,
  checkAuthenticated,
  ...rest
}) => {
  useEffect(() => {
    checkAuthenticated();
    console.log('authenticating (unprivate)');
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          console.log('authenticated (bad)');
          return <Redirect to='/home-page' />;
        }
        console.log('not authenticated (good)');
        return <Component {...props} />;
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

UnPrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  checkAuthenticated: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { checkAuthenticated })(UnPrivateRoute);
