import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Metrics } from '../../config';

export const Container = styled.ScrollView``;

export const Header = styled(SafeAreaView)`
  background-color: ${Colors.mainTheme.primary};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  min-height: ${Metrics.screenHeight / 5}px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-left: ${Metrics.screenWidth / 4}px;
  padding-right: ${Metrics.screenWidth / 4}px;
`;

export const ContentContainer = styled.View`
  padding: ${Metrics.spacing.sm}px ${Metrics.spacing.lg}px;
  padding-bottom: ${Metrics.spacing.lg}px;
`;
