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
    //eslint-disable-next-line
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Redirect to='/home-page' />;
        }
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
