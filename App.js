import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import HomeScreen from './app/components/HomeScreen';
import CoursesMenu from './app/components/CoursesMenu';
import CoursesList from './app/components/CoursesList';
import Test2 from './app/components/Test2';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={HomeScreen} title="Home" hideNavBar={true}/>
          <Scene key="coursesMenu" component={CoursesMenu} title="Listes de courses"/>
          <Scene key="coursesList" component={CoursesList} />
          <Scene key="test2" component={Test2} title="Test2"/>
        </Stack>
      </Router>
    );
  }
}