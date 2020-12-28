import styled from 'styled-components/native';
import Colors from '../../config/Colors';

export const IconContainer = styled.View`
  border: 6px solid white;
  width: 97px;
  height: 95px;
  margin: 8% 0;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ color }) => color};
`;
