import React from 'react';
import Colors from '../../config/Colors';
import Text from '../Text';
import { Metrics } from '../../config';

const ErrorLabel = ({ children }) => {
  return (
    <Text size={Metrics.fontSize.xxsm} color={Colors.mainTheme.error}>
      {children}
    </Text>
  );
};

export default ErrorLabel;
