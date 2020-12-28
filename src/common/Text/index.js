import React from 'react';
import { TextStyled } from './styles';
import Colors from '../../config/Colors';
import Metrics from '../../config/Metrics';

const Text = ({
  size = Metrics.fontSize.md,
  color = Colors.mainTheme.textPrimary,
  children,
  textAlign = 'center',
  bolder = false,
  width,
  style,
  uppercase,
}) => {
  return (
    <TextStyled
      uppercase={uppercase}
      width={width}
      textAlign={textAlign}
      color={color}
      size={size}
      bolder={bolder}
      style={style}
    >
      {children}
    </TextStyled>
  );
};

export default Text;
