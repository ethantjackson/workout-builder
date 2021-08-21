import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/UserActions';

const PrivateRoute = ({
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
        if (!isAuthenticated) {
          return <Redirect to='/' />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  checkAuthenticated: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { checkAuthenticated })(PrivateRoute);
