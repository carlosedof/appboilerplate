import { createRef } from 'react';

const navigationRef = createRef();

const haveNavigationRef = () => navigationRef && navigationRef.current;

const goBack = () => {
  if (haveNavigationRef()) {
    navigationRef.current.goBack();
  }
};

const navigate = ({ name, params, key }) => {
  if (haveNavigationRef()) {
    navigationRef.current.navigate({ name, key, params });
  }
};

const popToTop = () => {
  if (haveNavigationRef()) {
    navigationRef.current.resetRoot();
  }
};

export default { navigationRef, navigate, goBack, popToTop };
