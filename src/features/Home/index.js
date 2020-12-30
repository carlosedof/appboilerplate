import React from 'react';
import { Text } from 'react-native';
import { PageTemplate } from '../../templates';
import { Container, ContentContainer } from './styles';

const Home = () => {
  return (
    <PageTemplate>
      <Container>
        <ContentContainer>
          <Text>teste</Text>
        </ContentContainer>
      </Container>
    </PageTemplate>
  );
};

export default Home;
