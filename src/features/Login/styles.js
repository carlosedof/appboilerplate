import styled from 'styled-components/native';
import { Colors } from '../../config';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${Colors.mainTheme.aux};
  opacity: 0.8;
`;

export const Box = styled.View`
  background-color: ${Colors.mainTheme.white};
  padding-horizontal: 25;
  margin: 4%;
  height: 70%;
  width: 92%;
  border-radius: 10;
  justify-content: center;
  align-items: center;
`;
