import React from 'react';
import Colors from '../../config/Colors';
import Metrics from '../../config/Metrics';
import Flex from '../Flex';
import { Icon } from '../index';
import { IconContainer } from './styles';
import Text from '../Text';

const TextWithIcon = ({
  size = Metrics.fontSize.md,
  textColor = Colors.mainTheme.black,
  children,
  bolder = false,
  style,
  uppercase,
  iconColor = Colors.mainTheme.white,
  iconName = 'alert-triangle',
  source = 'Feather',
  backgroundColor = Colors.softRed,
}) => {
  return (
    <Flex dir="row" verticalMargin={Metrics.spacingSM}>
      <Flex
        width={25}
        verticalPadding={Metrics.spacingSM}
        align="flex-start"
        justify="flex-start"
        height={100}
      >
        <IconContainer backgroundColor={backgroundColor}>
          <Icon
            source={source}
            iconName={iconName}
            color={iconColor}
            size={35}
          />
        </IconContainer>
      </Flex>
      <Flex width={85}>
        <Text
          uppercase={uppercase}
          width={100}
          textAlign="left"
          color={textColor}
          size={size}
          bolder={bolder}
          style={style}
        >
          {children}
        </Text>
      </Flex>
    </Flex>
  );
};

export default TextWithIcon;
