import React, { useEffect, useState } from 'react';
import Text from '../Text';
import { Colors } from '../../config';
import Metrics from '../../config/Metrics';
import Flex from '../Flex';
import { Icon } from '../index';
import { TouchableOpacityStyled } from './styles';
import Bold from '../Bold';

const DualSelect = ({
  trueLabel = 'sim',
  falseLabel = 'não',
  onChange,
  question,
  disabled,
  value,
}) => {
  const [answer, setAnswer] = useState(!!value);

  useEffect(() => onChange(answer), [answer]);

  return (
    <Flex verticalMargin={Metrics.spacing.md}>
      <Text color={Colors.mainTheme.aux} size={Metrics.fontSize.sm}>
        <Bold>{question}</Bold>
      </Text>
      <Flex dir="row" verticalMargin={Metrics.spacing.md}>
        <TouchableOpacityStyled
          answer={answer}
          onPress={() => {
            if (!disabled) {
              setAnswer(true);
            }
          }}
        >
          {answer && (
            <Flex position="absolute" top={5} align="flex-end">
              <Icon
                source="AntDesign"
                iconName="check"
                color={Colors.mainTheme.white}
                size={25}
              />
            </Flex>
          )}
          <Text
            uppercase
            size={Metrics.fontSize.sm}
            color={answer ? Colors.mainTheme.white : Colors.mainTheme.primary}
          >
            <Bold>{trueLabel}</Bold>
          </Text>
        </TouchableOpacityStyled>
        <TouchableOpacityStyled
          answer={!answer}
          onPress={() => {
            if (!disabled) {
              setAnswer(false);
            }
          }}
        >
          {!answer && (
            <Flex position="absolute" top={5} align="flex-end">
              <Icon
                source="AntDesign"
                iconName="close"
                color={Colors.mainTheme.white}
                size={25}
              />
            </Flex>
          )}

          <Text
            uppercase
            size={Metrics.fontSize.sm}
            color={!answer ? Colors.mainTheme.white : Colors.mainTheme.primary}
          >
            <Bold>{falseLabel}</Bold>
          </Text>
        </TouchableOpacityStyled>
      </Flex>
    </Flex>
  );
};

export default DualSelect;
