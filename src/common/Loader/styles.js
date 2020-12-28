import styled from 'styled-components/native';
import * as Animated from 'react-native';

export const LoaderStyled = styled.View`
  position: absolute;
  z-index: 2;
  width: 90%;
  padding: 8%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 5px 5px 10px black;
`;

export const ActivityIndicatorStyled = styled.ActivityIndicator``;

export const LoaderContainer = styled(Animated.View)`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
