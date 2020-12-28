import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import Icon from '../../common/Icon';
import { ViewStyled } from './styles';
import Colors from '../../config/Colors';
import { Text } from '../../common';
import { Metrics } from '../../config';

export default function CloseBtn({
  onPress,
  color = Colors.mainTheme.softGray,
  topLeft,
  topRight,
  btRight,
  btLeft,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ViewStyled
        topLeft={topLeft}
        topRight={topRight}
        btRight={btRight}
        btLeft={btLeft}
      >
        <Text size={Metrics.fontSize.xxlg} color={Colors.mainTheme.softGray}>
          X
        </Text>
      </ViewStyled>
    </TouchableWithoutFeedback>
  );
}
