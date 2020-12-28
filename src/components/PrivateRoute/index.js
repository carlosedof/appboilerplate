import React, { useEffect } from 'react';
import { useAuthAuthenticated } from '../../store/hooks/auth';

export default ({ component: Component, handleCloseLogin }) => {
  return ({ navigation }) => {
    const authenticated = useAuthAuthenticated();

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        if (!authenticated) {
          navigation.navigate('Login', {
            handleClose: () =>
              handleCloseLogin
                ? handleCloseLogin()
                : navigation.navigate('Home'),
          });
        }
      });

      return unsubscribe;
    }, [navigation, authenticated]);
    if (!authenticated) {
      return null;
    }
    return <Component />;
  };
};
