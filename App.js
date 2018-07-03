import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import HomeScreen from './app/components/HomeScreen';
import ShoppingMenu from './app/components/ShoppingMenu';
import ShoppingList from './app/components/ShoppingList';
import Test2 from './app/components/Test2';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={HomeScreen} title="Home" hideNavBar={true}/>
          <Scene key="coursesMenu" component={ShoppingMenu} title="Shopping Lists"/>
          <Scene key="coursesList" component={ShoppingList} />
          <Scene key="test2" component={Test2} title="Test2"/>
        </Stack>
      </Router>
    );
  }
}