import styled from 'styled-components/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Metrics } from '../../config';

export const CalendarIconButton = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  z-index: 2;
  right: ${Metrics.spacingLG}px;
`;

export const NonEditable = styled.View`
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;
