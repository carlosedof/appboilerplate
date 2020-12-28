import styled from 'styled-components/native';
import { Colors } from '../../config';

export const IconContainer = styled.View`
  background-color: ${Colors.mainTheme.white};
  border-width: 1px;
  width: 30px;
  height: 30px;
  padding-top: 2px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${Colors.mainTheme.primary};
`;
