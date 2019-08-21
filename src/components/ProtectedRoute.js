import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../utils/auth';

const ProtectedRoute  = ({component: Component, redirectUrl, ...rest}) => {
  
  return (
      <Route
        {...rest}
        render={ props  => {
            var user = getUser();
            if(user){
              return <Component {...props} />
            } else {
              return <Redirect to={{pathname: redirectUrl || '/', state: {from: props.location}}} />
            }
          }
        }
      />
    )
}
export default ProtectedRoute;