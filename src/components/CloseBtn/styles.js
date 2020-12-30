import styled from 'styled-components/native';
import { View } from 'react-native';
import { Metrics } from '../../config';

export const ViewStyled = styled(View)`
  position: absolute;
  ${({ topLeft, topRight, btRight, btLeft }) => {
    if (topLeft) {
      return `top: 10px; left: 10px;`;
    }
    if (topRight) {
      return `top: 10px; right: 10px;`;
    }
    if (btRight) {
      return `bottom: 10px; right: 10px;`;
    }
    if (btLeft) {
      return `bottom: 10px; left: 10px;`;
    }
    return `top: 0; right: ${Metrics.spacing.lg}px`;
  }}
`;
