import styled from 'styled-components/native';
import { Colors } from '../../config';

export const Step = styled.View`
  background-color: ${({ current, index }) => {
    if (current === index) {
      return `${Colors.mainTheme.primary}`;
    }
    if (current > index) {
      return `${Colors.mainTheme.btnPrimary}`;
    }
    return `${Colors.mainTheme.secondary}`;
  }};
  border-color: ${({ current, index }) => {
    if (current === index) {
      return `${Colors.mainTheme.secondary}`;
    }
    if (current > index) {
      return `${Colors.mainTheme.btnPrimary}`;
    }
    return `${Colors.mainTheme.primary}`;
  }};
  border-width: 1px;
  padding: 12px 20px;
  border-radius: 30px;
`;

export const Line = styled.View`
  height: 2px;
  width: 80%;
  margin: 0 10%;
  z-index: -1;
  left: 0;
  position: absolute;
  background-color: ${Colors.mainTheme.primary};
`;
