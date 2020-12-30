import React, { useState } from 'react';
import { Animated } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Text from '../Text';
import { Colors } from '../../config';
import Metrics from '../../config/Metrics';
import Icon from '../Icon';
import { AnimatedContainer, DropContainer } from './styles';

const Picker = ({
  label,
  value,
  onChange,
  placeholder = null,
  list,
  required,
  error,
}) => {
  const [topPosition, setTopPosition] = useState(
    new Animated.Value(value ? -8 : 15),
  );

  const handleChange = (newValue) => {
    handleAnimateLabel(topPosition, !!newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleAnimateLabel = (elementValue, isFilled) => {
    Animated.timing(elementValue, {
      toValue: isFilled ? -8 : 15,
      duration: 175,
      useNativeDriver: false,
    }).start();
  };

  return (
    <DropContainer
      style={{
        borderColor: error ? Colors.mainTheme.error : Colors.mainTheme.primary,
      }}
    >
      <AnimatedContainer
        style={{
          top: topPosition,
        }}
      >
        <Text
          size={value ? Metrics.fontSize.xxxsm : Metrics.fontSize.xsm}
          color={error ? Colors.mainTheme.error : Colors.mainTheme.primary}
          textAlign="left"
        >
          {label + (required ? '*' : '')}
        </Text>
      </AnimatedContainer>
      <RNPickerSelect
        onValueChange={(e) => handleChange(e)}
        value={value}
        items={list}
        placeholder={{ label: placeholder }}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        Icon={() => (
          <Icon
            iconName="down"
            source="AntDesign"
            size={17}
            color={Colors.mainTheme.primary}
          />
        )}
      />
    </DropContainer>
  );
};

export default Picker;

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'black',
    paddingRight: 30,
  },
  iconContainer: {
    top: 15,
    right: 12,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black',
    paddingRight: 30,
  },
  placeholder: {
    opacity: 0,
  },
};
