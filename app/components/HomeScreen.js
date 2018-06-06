import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainTitle from './MainTitle';
import MainMenu from './MainMenu';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainTitle />
        <MainMenu />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});