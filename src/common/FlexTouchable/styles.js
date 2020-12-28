import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const ViewStyled = styled(TouchableOpacity)`
  ${({ top }) => {
    if (top || top === 0) {
      return `top: ${top}px`;
    }
    return ``;
  }};
  ${({ left }) => {
    if (left || left === 0) {
      return `left: ${left}px`;
    }
    return ``;
  }};
  ${({ right }) => {
    if (right || right === 0) {
      return `right: ${right}px`;
    }
    return ``;
  }};
  ${({ bottom }) => {
    if (bottom || bottom === 0) {
      return `bottom: ${bottom}px`;
    }
    return ``;
  }};
  ${({ flexWrap }) => {
    if (flexWrap) {
      return `flex-wrap: wrap`;
    }
    return ``;
  }};
  position: ${({ position }) => `${position}`};
  width: ${({ width }) => `${width}%`};
  ${({ borderRadius }) =>
    borderRadius ? `border-radius: ${borderRadius}px` : ``};
  ${({ height }) => (height ? `height: ${height}%` : ``)};
  ${({ zIndex }) => (zIndex ? `zIndex: ${zIndex}` : ``)};
  display: flex;
  text-align: ${({ textAlign }) => `${textAlign}`};
  flex-direction: ${(props) => props.dir};
  margin: ${(props) => `${props.verticalMargin}px ${props.horizontalMargin}px`};
  justify-content: ${({ justify }) => `${justify} `};
  align-items: ${({ align }) => `${align} `};
  padding: ${(props) =>
    `${props.verticalPadding}px ${props.horizontalPadding}px`};
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `};
`;
