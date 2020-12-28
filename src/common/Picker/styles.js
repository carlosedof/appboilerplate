import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { Colors } from '../../config';

export const DropContainer = styled.View`
  width: 100%;
  border-width: 1.1px;
  border-radius: 5px;
  height: 55px;
  padding: 3px;
  background-color: transparent;
  margin-top: 10px;
  margin-bottom: 1px;
  position: relative;
`;

export const AnimatedContainer = styled(Animated.View)`
  left: 12px;
  background-color: ${Colors.mainTheme.appBg};
  z-index: -1;
  position: absolute;
  padding-horizontal: 3px;
`;
