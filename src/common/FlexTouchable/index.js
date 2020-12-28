import React from 'react';
import { ViewStyled } from './styles';

const FlexTouchable = ({
  width = 100,
  height,
  dir = 'column',
  children,
  justify = 'center',
  align = 'center',
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  horizontalMargin = 0,
  verticalMargin = 0,
  horizontalPadding = 0,
  verticalPadding = 0,
  flex,
  position = 'relative',
  top,
  bottom,
  left,
  right,
  flexWrap,
  onPress,
  zIndex,
  borderRadius,
  ...rest
}) => {
  return (
    <ViewStyled
      zIndex={zIndex}
      onPress={onPress}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      width={width}
      height={height}
      position={position}
      justify={justify}
      align={align}
      dir={dir}
      horizontalMargin={horizontalMargin}
      verticalMargin={verticalMargin}
      horizontalPadding={horizontalPadding}
      verticalPadding={verticalPadding}
      flex={flex}
      borderRadius={borderRadius}
      flexWrap={flexWrap}
      {...rest}
    >
      {children}
    </ViewStyled>
  );
};

export default FlexTouchable;
