import styled from 'styled-components/native';
import { Colors } from '../../config';

export const ChipStyled = styled.View`
  border-width: 1px;
  padding: 2px 5px;
  margin-top: 5px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: ${Colors.mainTheme.softGray};
  background-color: ${Colors.mainTheme.softGray};
`;
