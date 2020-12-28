import React from 'react';
import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Metrics, Colors } from '../../config';
import { PageTemplate } from '../../templates';

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
  padding: ${Metrics.spacingSM}px ${Metrics.spacingLG}px;
  padding-bottom: ${Metrics.spacingLG}px;
`;
const Home = () => {
  return (
    <PageTemplate>
      <Header>
        <Text size={Metrics.fontSize.md}>Juntos no combate ao COVID 19</Text>
      </Header>
      <Container>
        <ContentContainer />
      </Container>
    </PageTemplate>
  );
};

export default Home;
