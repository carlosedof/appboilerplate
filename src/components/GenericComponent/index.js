import React from 'react';

export default ({ component: Component, ...rest }) => {
  return () => {
    return <Component {...rest} />;
  };
};
