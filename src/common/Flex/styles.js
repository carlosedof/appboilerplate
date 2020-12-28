import styled, { css } from 'styled-components/native';

export const ViewStyled = styled.View`
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
  width: ${({ width, widthUnity }) => `${width}${widthUnity}`};
  ${({ height, heightUnity }) =>
    height ? `height: ${height}${heightUnity}` : ``};
  ${({ zIndex }) => (zIndex ? `zIndex: ${zIndex}` : ``)};
  ${({ borderRadius }) =>
    borderRadius ? `border-radius: ${borderRadius}px` : ``};
  display: flex;
  text-align: ${({ textAlign }) => `${textAlign}`};
  flex-direction: ${(props) => props.dir};
  margin: ${(props) =>
    `${props.verticalMargin ? props.verticalMargin : 0}px ${
      props.horizontalMargin ? props.horizontalMargin : 0
    }px`};
  justify-content: ${({ justify }) => `${justify} `};
  align-items: ${({ align }) => `${align} `};
  padding: ${(props) =>
    `${props.verticalPadding ? props.verticalPadding : 0}px ${
      props.horizontalPadding ? props.horizontalPadding : 0
    }px`};
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `};
`;
