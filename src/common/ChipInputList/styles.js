import styled from 'styled-components/native';
import { Colors, Metrics } from '../../config';

export const ChipStyled = styled.View`
  border-width: 1px;
  padding: 2px ${Metrics.spacing.minimum}px;
  margin-top: ${Metrics.spacing.minimum}px;
  border-radius: ${Metrics.spacing.sm}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: ${Colors.mainTheme.primary};
  background-color: ${Colors.mainTheme.primary};
`;

export const TouchableStyled = styled.TouchableOpacity`
  margin: ${({ margin }) => `${margin}px`};
`;
