import React from 'react';
import { Line, Step } from './styles';
import Colors from '../../config/Colors';
import Flex from '../Flex';
import Text from '../Text';
import { Metrics } from '../../config';
import Bold from '../Bold';

const Steps = ({ steps = [], current }) => {
  return (
    <Flex verticalMargin={20}>
      <Flex dir="row" width={100} justify="space-around">
        {steps.map((item, index) => (
          <Flex key={index}>
            <Step current={current} index={index}>
              <Text
                color={
                  current === index || current > index
                    ? Colors.mainTheme.white
                    : Colors.mainTheme.white
                }
              >
                {index + 1}
              </Text>
            </Step>
          </Flex>
        ))}
        <Line />
      </Flex>
      <Flex dir="row" width={100} justify="space-around" verticalMargin={5}>
        {steps.map((item, index) => (
          <Text
            key={index}
            width={25}
            size={Metrics.fontSize.xxsm}
            color={
              // eslint-disable-next-line no-nested-ternary
              current === index
                ? Colors.mainTheme.primary
                : current > index
                ? Colors.mainTheme.btnPrimary
                : Colors.mainTheme.aux
            }
          >
            <Bold>{item.name}</Bold>
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Steps;
