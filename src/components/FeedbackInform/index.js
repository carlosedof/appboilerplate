import React from 'react';
import { Colors, Metrics } from '../../config';
import { Bold, Flex, Icon } from '../../common';
import Text from '../../common/Text';
import { IconContainer } from './styles';

export default function FeedbackInform({ text, type }) {
  return (
    <Flex horizontalPadding={Metrics.spacingMD}>
      <Flex horizontalPadding={Metrics.spacingLG}>
        <Text color={Colors.mainTheme.white} size={Metrics.fontSize.sm}>
          <Bold>Orientação recomendada com base na sua avaliação</Bold>
        </Text>
      </Flex>
      <IconContainer
        color={
          // eslint-disable-next-line no-nested-ternary
          type === 'redAlert'
            ? Colors.mainTheme.error
            : type === 'yellowAlert'
            ? Colors.yellowAlert
            : Colors.greenCheck
        }
      >
        <Icon
          color={Colors.mainTheme.white}
          source={type !== 'yellowAlert' ? 'Feather' : 'AntDesign'}
          iconName={
            // eslint-disable-next-line no-nested-ternary
            type === 'redAlert'
              ? 'alert-triangle'
              : type === 'yellowAlert'
              ? 'exclamation'
              : 'check'
          }
          size={48}
        />
      </IconContainer>
      <Flex horizontalPadding={Metrics.spacingMD}>
        <Text color={Colors.mainTheme.white} size={Metrics.fontSize.lg}>
          <Bold>{text}</Bold>
        </Text>
      </Flex>
    </Flex>
  );
}
