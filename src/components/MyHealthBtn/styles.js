import styled from 'styled-components/native';
import { View } from 'react-native';
import { Colors } from '../../config';

export const ViewStyled = styled(View)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${() => Colors.mainTheme.primary};
  color: ${() => Colors.mainTheme.primary};
`;
