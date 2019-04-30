import React from 'react';
import { Container, Content, Card, CardItem, Body, Header } from 'native-base';

export const AboutScreen = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Body>About</Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

AboutScreen.path = '';
AboutScreen.navigationOptions = {
  title: 'About',
  linkName: 'About Page',
};
