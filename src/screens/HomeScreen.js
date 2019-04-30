import React from 'react';
import { Container, Content, Card, CardItem, Body, Header } from 'native-base';

export const HomeScreen = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Body>Home</Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

HomeScreen.path = '';
HomeScreen.navigationOptions = {
  title: 'Home',
  linkName: 'Home Page',
};
