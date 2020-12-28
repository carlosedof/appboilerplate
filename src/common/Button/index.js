import React from 'react';
import ActivityIndicator from 'react-native-paper/src/components/ActivityIndicator';
import {
  ActivityIndicatorStyled,
  ButtonStyled,
  InnerButtonTextStyled,
} from './styles';
import Colors from '../../config/Colors';

const Button = ({
  label,
  alternative,
  onlyText,
  onPress,
  isFetching,
  bgColor = null,
  color = null,
  bold = false,
}) => {
  return (
    <ButtonStyled
      bgColor={bgColor}
      onPress={!isFetching ? onPress : () => {}}
      alternative={alternative}
      onlyText={onlyText}
    >
      <InnerButtonTextStyled color={color} onlyText={onlyText} bold={bold}>
        {label}
      </InnerButtonTextStyled>
      {isFetching && (
        <ActivityIndicatorStyled
          size="small"
          color={color || Colors.mainTheme.secondary}
        />
      )}
    </ButtonStyled>
  );
};

export default Button;
