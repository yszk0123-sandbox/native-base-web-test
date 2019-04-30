import React from 'react';
import { Container, Content } from 'native-base';
import { Link } from '@react-navigation/web';

export const FooterTabs = () => {
  return (
    <Container>
      <Content>
        <Link routeName="Home">Home</Link>
        <Link routeName="About">About</Link>
      </Content>
    </Container>
  );
};
