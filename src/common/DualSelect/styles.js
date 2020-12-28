import styled from 'styled-components/native';
import { Colors } from '../../config';

export const TouchableOpacityStyled = styled.TouchableOpacity`
  position: relative;
  border-width: 2px;
  width: 45%;
  margin: 2%;
  padding: 35px 5px;
  border-radius: 15px;
  justify-content: center;
  border-color: ${Colors.mainTheme.primary};
  background-color: ${({ answer }) =>
    answer ? Colors.mainTheme.primary : Colors.mainTheme.white};
`;
