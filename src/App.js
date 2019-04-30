import React from 'react';
import { Container, Content, Card, CardItem, Body, Header } from 'native-base';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <img src={logo} className="App-logo" alt="logo" />
        <Card>
          <CardItem>
            <Body>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

export default App;
