import styled from 'styled-components/native';
import { Colors, Metrics } from '../../config';

export const ChipStyled = styled.View`
  border-width: 1px;
  padding: 2px ${Metrics.spacingMinimun}px;
  margin-top: ${Metrics.spacingMinimun}px;
  border-radius: ${Metrics.spacingSM}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: ${Colors.mainTheme.softGray};
  background-color: ${Colors.mainTheme.softGray};
`;

export const TouchableStyled = styled.TouchableOpacity`
  margin: ${({ margin }) => `${margin}px`};
`;
