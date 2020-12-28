import React, { useEffect, useState } from 'react';

import { TouchableOpacity } from 'react-native';
import Text from '../Text';
import { Colors } from '../../config';
import Metrics from '../../config/Metrics';
import Flex from '../Flex';
import { RadioStyled } from './styles';
import Whitespace from '../Whitespace';
import Icon from '../Icon';

const Radio = ({
  trueLabel,
  falseLabel,
  onChange,
  question,
  value,
  required,
}) => {
  const [answer, setAnswer] = useState(!!value);

  useEffect(() => onChange(answer), [answer]);
  return (
    <Flex justify="flex-start" align="flex-start" verticalMargin={5}>
      <Text color={Colors.mainTheme.black} size={Metrics.fontSize.sm}>
        {question + (required ? '*' : '')}
      </Text>
      <Flex dir="row" justify="flex-start" verticalMargin={5}>
        <TouchableOpacity
          onPress={() => {
            setAnswer(true);
          }}
        >
          <Flex dir="row" justify="flex-start" verticalMargin={5}>
            <RadioStyled checked={answer}>
              {answer && (
                <Icon
                  source="AntDesign"
                  iconName="check"
                  color={Colors.mainTheme.white}
                  size={18}
                />
              )}
            </RadioStyled>
            <Whitespace width={8} />
            <Text
              color={Colors.mainTheme.black}
              size={Metrics.fontSize.xsm}
              textAlign="left"
            >
              {trueLabel}
            </Text>
          </Flex>
        </TouchableOpacity>
        <Whitespace width={45} />
        <TouchableOpacity
          onPress={() => {
            setAnswer(false);
          }}
        >
          <Flex dir="row" justify="flex-start" verticalMargin={5}>
            <RadioStyled checked={!answer}>
              {!answer && (
                <Icon
                  source="AntDesign"
                  iconName="check"
                  color={Colors.mainTheme.white}
                  size={18}
                />
              )}
            </RadioStyled>
            <Whitespace width={8} />
            <Text
              color={Colors.mainTheme.black}
              size={Metrics.fontSize.xsm}
              textAlign="left"
            >
              {falseLabel}
            </Text>
          </Flex>
        </TouchableOpacity>
      </Flex>
    </Flex>
  );
};

export default Radio;
