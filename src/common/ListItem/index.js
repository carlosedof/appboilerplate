import React from 'react';
import { lighten } from 'polished';
import Colors from '../../config/Colors';
import Icon from '../Icon';
import { Flex } from '../index';
import { CircleIcon } from './styles';
import Text from '../Text';
import Bold from '../Bold';
import FlexTouchable from '../FlexTouchable';
import { Metrics } from '../../config';

const ListItem = ({
  title,
  content,
  createdAt,
  icon,
  iconColor,
  iconFont,
  onPress,
  response,
}) => {
  return (
    <FlexTouchable
      align="flex-start"
      dir="row"
      verticalPadding={10}
      onPress={onPress}
    >
      <Flex width={20}>
        <CircleIcon
          border={iconColor}
          style={{ backgroundColor: lighten(0.42, iconColor) }}
        >
          <Icon color={iconColor} source={iconFont} size={20} iconName={icon} />
        </CircleIcon>
      </Flex>
      <Flex width={70} align="flex-start">
        <Text textAlign="left" color="black" size={Metrics.fontSize.sm}>
          <Bold>{title}</Bold>
        </Text>
        <Text textAlign="left" color="black" size={Metrics.fontSize.sm}>
          {content}
        </Text>
        <Flex verticalMargin={10} dir="row" justify="space-between">
          <Text textAlign="left" color="gray" size={Metrics.fontSize.xsm}>
            há 30min
          </Text>
          <Text
            textAlign="left"
            color={Colors.mainTheme.primary}
            size={Metrics.fontSize.xsm}
          >
            {response ? 'Responder' : ''}
          </Text>
        </Flex>
      </Flex>
      <Flex width={15}>
        <Icon
          color="black"
          source="FontAwesome"
          size={30}
          iconName="angle-right"
        />
      </Flex>
    </FlexTouchable>
  );
};

export default ListItem;
