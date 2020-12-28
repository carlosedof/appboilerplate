import styled from 'styled-components/native';
import { Colors, Metrics } from '../../config';

export const Block = styled.View`
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: ${Metrics.spacingXLG}px;
  margin: ${Metrics.spacingSM}px ${Metrics.spacingLG}px;
  background: ${Colors.mainTheme.lightGray};
`;

export const Thumb = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThumbInternal = styled.View`
  width: 17px;
  height: 17px;
  border-radius: 20px;
  background-color: ${Colors.mainTheme.white};
`;
