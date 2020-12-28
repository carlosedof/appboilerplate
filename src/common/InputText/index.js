import React from 'react';
import { TextInput } from 'react-native-paper';
import { ActivityIndicator } from 'react-native';
import * as Validations from '../../config/Validations';
import Icon from '../Icon';
import Flex from '../Flex';
import { IconContainer } from './styles';
import { Colors, Metrics } from '../../config';
import FlexTouchable from '../FlexTouchable';
import { unFormat } from '../../config/utils/MasksUtil';

const InputText = ({
  label,
  value,
  onChange,
  type,
  button,
  onBlur,
  error,
  maxLength,
  required,
  numberValidation = true,
  showSpinner,
  placeholder,
  icon,
  iconColor,
  ...rest
}) => {
  const handleChangeByType = (newValue) => {
    let valid = true;
    switch (type) {
      case 'phone':
      case 'cpf':
        newValue = unFormat(newValue);
        break;
      case 'number':
        if (numberValidation) {
          if (!Validations.validateOnlyNumbers(newValue)) {
            valid = false;
          }
        }
        break;
      default:
        break;
    }
    if (valid || !newValue) {
      onChange(newValue);
    }
  };
  return (
    <Flex dir="row" width={100}>
      <TextInput
        {...rest}
        style={{
          width: '100%',
          marginBottom: Metrics.spacingSM,
        }}
        mode="outlined"
        error={error}
        keyboardType={
          type === 'number' || type === 'cpf' || type === 'phone'
            ? 'numeric'
            : 'default'
        }
        label={required ? `${label}*` : label}
        value={value}
        onChangeText={(e) => handleChangeByType(e)}
        secureTextEntry={type === 'password'}
        autofocus
        placeholder={!label ? placeholder : ''}
        maxLength={maxLength}
        onBlur={onBlur}
      />
      {!showSpinner && button && (
        <FlexTouchable
          dir="row"
          position="absolute"
          top={0}
          right={0}
          width={12}
          height={100}
          justify="center"
          align="center"
          onPress={() => button.onPress(value)}
          zIndex={10}
        >
          <IconContainer>
            <Icon
              iconName={button.name}
              source={button.src}
              size={25}
              color={Colors.mainTheme.primary}
            />
          </IconContainer>
        </FlexTouchable>
      )}
      {!button && showSpinner && (
        <Flex
          dir="row"
          position="absolute"
          right={Metrics.spacingMD}
          width={12}
          justify="center"
          align="center"
        >
          <ActivityIndicator size={30} color={Colors.mainTheme.black} />
        </Flex>
      )}
      {!button && !showSpinner && icon && (
        <Flex
          dir="row"
          position="absolute"
          right={Metrics.spacingMD}
          width={12}
          justify="center"
          align="center"
        >
          <Icon
            iconName={icon}
            source="MaterialCommunityIcons"
            size={30}
            color={iconColor}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default InputText;
