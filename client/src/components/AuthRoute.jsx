import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!Cookies.get('token'); // Check for token in cookies

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AuthRoute;