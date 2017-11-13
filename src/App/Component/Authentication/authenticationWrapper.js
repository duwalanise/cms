import React from 'react';
import Login from './index';

export const AuthenticationWrapper = WrappedComponent => {
  return class extends React.Component {
    render() {
      if (this.props.isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      }
      return <Login />;
    }
  };
};
