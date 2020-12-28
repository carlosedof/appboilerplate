import styled from 'styled-components/native';
import { Colors } from '../../config';

export const RadioStyled = styled.View`
  border-width: 1px;
  width: 30px;
  height: 30px;
  padding-top: 2px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${({ checked }) =>
    checked ? Colors.mainTheme.btnPrimary : Colors.mainTheme.gray};
  background-color: ${({ checked }) =>
    checked ? Colors.mainTheme.btnPrimary : Colors.transparent};
`;
