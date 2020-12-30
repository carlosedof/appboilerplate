import styled from 'styled-components/native';
import { Colors } from '../../config';

export const ButtonStyled = styled.TouchableOpacity`
  background-color: ${({ alternative, onlyText, bgColor }) =>
    alternative || onlyText
      ? `transparent`
      : bgColor || Colors.mainTheme.btnPrimary};
  border-color: ${({ alternative, onlyText, bgColor }) =>
    alternative || onlyText
      ? `transparent`
      : bgColor || Colors.mainTheme.btnPrimary};
  border-width: ${({ onlyText }) => (onlyText ? `0px` : `2px`)};
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  border-radius: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const InnerButtonTextStyled = styled.Text`
  ${({ color, onlyText }) => {
    if (onlyText) {
      return `color: ${Colors.mainTheme.aux};`;
    }
    if (onlyText && color) {
      return `color: ${Colors.mainTheme.aux};`;
    }
    if (color) {
      return `color: ${color};`;
    }
    return `color: ${Colors.mainTheme.white};`;
  }};
  text-transform: ${({ onlyText }) => (onlyText ? `none` : `uppercase`)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const ActivityIndicatorStyled = styled.ActivityIndicator`
  position: absolute;
  right: 5%;
`;
