import styled, { css } from 'styled-components/native';
import { Colors, Metrics } from '../config';

export const Header = styled.ImageBackground.attrs(({ background }) => ({
  source: background,
}))`
  background-color: ${Colors.mainTheme.primary};
  height: ${Metrics.screenHeight / 6}px;
  align-items: center;
  padding: 0 ${Metrics.spacingLG}px;
  padding-top: ${({ statusBarHeight }) => statusBarHeight}px;
  overflow: hidden;
  flex-direction: row;
  display: flex;
  ${({ rounded }) =>
    rounded &&
    css`
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    `}
`;

export const TemplateImage = styled.Image`
  width: 100%;
`;

export const ImageTopTemplateContainer = styled.View`
  position: relative;
  height: 100%;
`;

export const ChildrenContainer = styled.View`
  background-color: white;
  height: 60%;
  width: 100%;
  border-radius: 25px;
  position: absolute;
  bottom: 0;
`;

export const HeaderTransparent = styled.View`
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  height: ${Metrics.screenHeight / 6}px;
  z-index: 2;
`;

export const Title = styled.Text`
  color: ${({ titleColor }) => titleColor || Colors.mainTheme.white};
  font-size: ${Metrics.fontSize.md};
  flex: 1;
  text-align: center;
`;
