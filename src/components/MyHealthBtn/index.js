import React from 'react';
import { Icon, Text } from '../../common';
import { ViewStyled } from './styles';
import { Colors, Metrics } from '../../config';

export default function MyHealthBtn({ focused, title }) {
  return (
    <>
      <ViewStyled>
        <Icon
          source="AntDesign"
          iconName="hearto"
          color={Colors.mainTheme.secondary}
        />
      </ViewStyled>
      <Text color={Colors.mainTheme.gray} size={Metrics.fontSize.xxxsm}>
        {title}
      </Text>
    </>
  );
}
