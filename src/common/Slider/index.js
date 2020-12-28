import React, { useCallback, useEffect, useState } from 'react';
import { Slider as SliderNative } from '@miblanchard/react-native-slider';
import { View } from 'react-native';
import Text from '../Text';
import { Colors } from '../../config';
import Metrics from '../../config/Metrics';
import Flex from '../Flex';
import { Block, Thumb, ThumbInternal } from './styles';
import Bold from '../Bold';
import { Whitespace } from '../index';

const Slider = ({
  trueLabel,
  falseLabel,
  onChange,
  label,

  required,
}) => {
  const [value, setValue] = useState(1);

  const getColorForValue = useCallback(() => {
    switch (value) {
      case 0:
        return Colors.greenCheck;
      case 1:
        return Colors.yellowAlert;
      case 2:
        return Colors.softRed;
      default:
        return 'black';
    }
  }, [value]);

  useEffect(() => onChange(value), [value]);

  return (
    <Block width={70}>
      <Text color={Colors.mainTheme.primary} size={Metrics.fontSize.sm}>
        <Bold>{label + (required ? '*' : '')}</Bold>
      </Text>
      <Whitespace height={Metrics.spacingMD} />
      <SliderNative
        value={value}
        style={{ width: '100%', height: 40 }}
        thumbTouchSize={{ width: 50, height: 40 }}
        minimumValue={0}
        maximumValue={2}
        onValueChange={(newValue) => setValue(newValue[0])}
        renderThumbComponent={() => (
          <Thumb color={getColorForValue}>
            <ThumbInternal />
          </Thumb>
        )}
        step={1}
        minimumTrackTintColor={getColorForValue()}
      />
      <Flex dir="row" justify="space-around" verticalMargin={Metrics.spacingMD}>
        <Flex width={33}>
          <Text
            textAlign="left"
            color={Colors.mainTheme.black}
            size={Metrics.fontSize.sm}
          >
            Melhor
          </Text>
        </Flex>
        <Flex width={33}>
          <Text color={Colors.mainTheme.black} size={Metrics.fontSize.sm}>
            Igual
          </Text>
        </Flex>
        <Flex width={33}>
          <Text
            textAlign="right"
            color={Colors.mainTheme.black}
            size={Metrics.fontSize.sm}
          >
            Pior
          </Text>
        </Flex>
      </Flex>
    </Block>
  );
};

export default Slider;
