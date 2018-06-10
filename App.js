import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import HomeScreen from './app/components/HomeScreen';
import Test1 from './app/components/Test1';
import Test2 from './app/components/Test2';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={HomeScreen} title="Home"/>
          <Scene key="test1" component={Test1} title="Test1"/>
          <Scene key="test2" component={Test2} title="Test2"/>
        </Stack>
      </Router>
    );
  }
}