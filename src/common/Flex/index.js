import React from 'react';
import { ViewStyled } from './styles';

const Flex = ({
  width = 100,
  height,
  dir = 'column',
  children,
  justify = 'center',
  align = 'center',
  horizontalMargin,
  verticalMargin,
  horizontalPadding,
  verticalPadding,
  flex,
  position = 'relative',
  top,
  bottom,
  left,
  right,
  flexWrap,
  zIndex,
  borderRadius,
  widthUnity = '%',
  heightUnity = '%',
  ...rest
}) => {
  return (
    <ViewStyled
      zIndex={zIndex}
      flexWrap={flexWrap}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
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
      widthUnity={widthUnity}
      heightUnity={heightUnity}
      {...rest}
    >
      {children}
    </ViewStyled>
  );
};

export default Flex;
